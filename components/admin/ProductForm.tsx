"use client";

import { useState, useEffect } from "react";
import { Product, ProductVariant, MultilingualString, Language, Accessory, ProductDimensions, ProductFeature } from "@/lib/types";
import { saveProduct, uploadImage, getProducts, deleteProduct } from "@/app/actions";
import { Plus, Trash2, Upload, Save, Package, Globe, Ruler, ImageIcon, ChevronDown, Check, AlertCircle, Edit3, Loader2, Sparkles, Box, Layers, Copy } from "lucide-react";

const LANG_LABELS: Record<Language, string> = { en: "English", fr: "Français", tr: "Türkçe" };
const LANG_FLAGS: Record<Language, string> = { en: "🇬🇧", fr: "🇫🇷", tr: "🇹🇷" };

const CATEGORIES = [
    { value: "bed", label: "Bed Set" },
    { value: "mattress", label: "Mattress" },
    { value: "sofa", label: "Sofa" },
    { value: "nightstand", label: "Nightstand" },
    { value: "accessory", label: "Accessory" },
];

// ── Reusable input classes (fixed for light theme) ──
const INPUT = "w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition";
const TEXTAREA = `${INPUT} resize-none`;
const LABEL = "block text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1.5";
const CARD = "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden";
const CARD_HEADER = "px-6 py-4 border-b border-gray-100 dark:border-gray-800";
const CARD_BODY = "p-6";

function emptyProduct(): Product {
    return {
        id: "", name: "", title: "", subtitle: "",
        description: { en: "", fr: "", tr: "" },
        features: [],
        dimensions: { totalHeight: "", mattressHeight: "", baseHeight: "" },
        images: [], variants: [],
        accessories: [],
        category: "bed", isNew: false,
    };
}

function emptyAccessory(): Accessory {
    return { name: { en: "", fr: "", tr: "" }, price: 0 };
}

export function ProductForm() {
    const [product, setProduct] = useState<Product>(emptyProduct());
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [descLang, setDescLang] = useState<Language>("fr");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [newFeature, setNewFeature] = useState("");
    const [showFeatureImporter, setShowFeatureImporter] = useState(false);

    useEffect(() => { loadProducts(); }, []);
    const loadProducts = async () => { setProducts(await getProducts()); };

    // ── Handlers ──
    const toSlug = (str: string) => str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "title" && !editingId) {
            setProduct((p) => ({ ...p, title: value, id: toSlug(value) }));
        } else {
            setProduct((p) => ({ ...p, [name]: value }));
        }
    };

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct((p) => ({ ...p, [e.target.name]: e.target.checked }));
    };

    const handleDesc = (lang: Language, val: string) => {
        setProduct((p) => ({ ...p, description: { ...p.description, [lang]: val } }));
    };

    const handleDimension = (key: string, val: string) => {
        setProduct((p) => ({ ...p, dimensions: { ...(p.dimensions || {}), [key]: val } }));
    };

    // Features
    const addFeature = () => {
        setProduct((p) => ({ ...p, features: [...p.features, { name: "" }] }));
    };
    const updateFeature = (i: number, f: keyof ProductFeature, v: string) => {
        const nf = [...product.features]; nf[i] = { ...nf[i], [f]: v };
        setProduct((p) => ({ ...p, features: nf }));
    };
    const handleFeatureImage = async (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const fd = new FormData(); fd.append("file", e.target.files[0]);
        setUploading(true);
        const res = await uploadImage(fd);
        setUploading(false);
        if (res.success && res.url) updateFeature(i, "image", res.url);
        else setMessage({ type: "error", text: "Image upload failed." });
    };
    const removeFeature = (i: number) => {
        setProduct((p) => ({ ...p, features: p.features.filter((_, idx) => idx !== i) }));
    };

    const importFeature = (f: ProductFeature) => {
        if (product.features.some(existing => existing.name === f.name)) return;
        setProduct(p => ({ ...p, features: [...p.features, f] }));
    };

    const availableFeatures = Array.from(new Set(
        products.flatMap(p => p.features)
            .filter(f => f.name && f.image)
            .map(f => JSON.stringify(f))
    )).map(s => JSON.parse(s) as ProductFeature);

    // Variants
    const addVariant = () => setProduct((p) => ({ ...p, variants: [...p.variants, { size: "", price: 0 }] }));
    const updateVariant = (i: number, f: keyof ProductVariant, v: string | number) => {
        const nv = [...product.variants]; nv[i] = { ...nv[i], [f]: v };
        setProduct((p) => ({ ...p, variants: nv }));
    };
    const removeVariant = (i: number) => setProduct((p) => ({ ...p, variants: p.variants.filter((_, idx) => idx !== i) }));

    const handleVariantsSectionImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const fd = new FormData(); fd.append("file", e.target.files[0]);
        setUploading(true);
        const res = await uploadImage(fd);
        setUploading(false);
        if (res.success && res.url) setProduct((p) => ({ ...p, variantsImage: res.url }));
        else setMessage({ type: "error", text: "Image upload failed." });
    };

    // Accessories
    const addAccessory = () => setProduct((p) => ({ ...p, accessories: [...(p.accessories || []), emptyAccessory()] }));
    const updateAccessory = (i: number, updates: Partial<Accessory>) => {
        const acc = [...(product.accessories || [])];
        acc[i] = { ...acc[i], ...updates };
        setProduct((p) => ({ ...p, accessories: acc }));
    };
    const updateAccessoryName = (i: number, lang: Language, val: string) => {
        const acc = [...(product.accessories || [])];
        acc[i] = { ...acc[i], name: { ...acc[i].name, [lang]: val } };
        setProduct((p) => ({ ...p, accessories: acc }));
    };
    const removeAccessory = (i: number) => setProduct((p) => ({ ...p, accessories: (p.accessories || []).filter((_, idx) => idx !== i) }));

    const handleAccessoryImage = async (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const fd = new FormData(); fd.append("file", e.target.files[0]);
        setUploading(true);
        const res = await uploadImage(fd);
        setUploading(false);
        if (res.success && res.url) updateAccessory(i, { image: res.url });
        else setMessage({ type: "error", text: "Image upload failed." });
    };

    const handleDimensionsImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const fd = new FormData(); fd.append("file", e.target.files[0]);
        setUploading(true);
        const res = await uploadImage(fd);
        setUploading(false);
        if (res.success && res.url) setProduct((p) => ({ ...p, dimensionsImage: res.url }));
        else setMessage({ type: "error", text: "Image upload failed." });
    };

    const handleDimensionSpecificImage = async (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const fd = new FormData(); fd.append("file", e.target.files[0]);
        setUploading(true);
        const res = await uploadImage(fd);
        setUploading(false);
        if (res.success && res.url) {
            setProduct((p) => ({
                ...p,
                dimensions: { ...(p.dimensions || {}), [`${key}Image`]: res.url }
            }));
        } else {
            setMessage({ type: "error", text: "Image upload failed." });
        }
    };



    // Images
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        const fd = new FormData(); fd.append("file", e.target.files[0]);
        setUploading(true);
        const res = await uploadImage(fd);
        setUploading(false);
        if (res.success && res.url) setProduct((p) => ({ ...p, images: [...p.images, res.url] }));
        else setMessage({ type: "error", text: "Image upload failed." });
    };
    const removeImage = (i: number) => setProduct((p) => ({ ...p, images: p.images.filter((_, idx) => idx !== i) }));

    // Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!product.title) { setMessage({ type: "error", text: "Title is required." }); return; }
        if (!product.id) { setProduct((p) => ({ ...p, id: toSlug(product.title) })); }
        setLoading(true); setMessage(null);
        const res = await saveProduct(product);
        setLoading(false);
        if (res.success) { setMessage({ type: "success", text: editingId ? "Product updated!" : "Product created!" }); await loadProducts(); if (!editingId) setProduct(emptyProduct()); }
        else setMessage({ type: "error", text: "Failed to save product." });
    };

    const selectProduct = (p: Product) => { setProduct({ ...p }); setEditingId(p.id); setMessage(null); };
    const resetForm = () => { setProduct(emptyProduct()); setEditingId(null); setMessage(null); };

    const handleDelete = async (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (!confirm("Are you sure you want to delete this product?")) return;

        setLoading(true);
        const res = await deleteProduct(id);
        setLoading(false);

        if (res.success) {
            setMessage({ type: "success", text: "Product deleted!" });
            if (editingId === id) resetForm();
            await loadProducts();
        } else {
            setMessage({ type: "error", text: "Failed to delete product." });
        }
    };


    return (
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8 max-w-7xl mx-auto">

            {/* ════════ Sidebar ════════ */}
            <aside className="xl:sticky xl:top-8 self-start space-y-4">
                <div className={CARD}>
                    <div className={`${CARD_HEADER} flex items-center justify-between`}>
                        <h2 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Package size={16} /> Products ({products.length})
                        </h2>
                        <button type="button" onClick={resetForm} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition font-medium flex items-center gap-1">
                            <Plus size={12} /> New
                        </button>
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
                        {products.length === 0 && <p className="p-4 text-sm text-gray-400 text-center">No products yet</p>}
                        {products.map((p) => (
                            <button key={p.id} type="button" onClick={() => selectProduct(p)}
                                className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group ${editingId === p.id ? "bg-primary/5 border-l-2 border-primary" : ""}`}>
                                <div className="flex items-center gap-3">
                                    {p.images[0] ? <img src={p.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                                        : <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0"><ImageIcon size={16} className="text-gray-400" /></div>}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{p.title}</p>
                                        <p className="text-xs text-gray-400 truncate">{p.category} · {p.variants.length} variant(s)</p>
                                    </div>
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="p-1.5 text-gray-400">
                                            <Edit3 size={14} />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => handleDelete(e, p.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                                            title="Delete product"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* ════════ Main Form ════════ */}
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Status */}
                {message && (
                    <div className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium ${message.type === "success" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800" : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"}`}>
                        {message.type === "success" ? <Check size={16} /> : <AlertCircle size={16} />}
                        {message.text}
                    </div>
                )}

                {/* ── 1. Basic Info ── */}
                <div className={CARD}>
                    <div className={CARD_HEADER}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Package size={16} className="text-primary" /> Basic Information
                        </h3>
                    </div>
                    <div className={`${CARD_BODY} space-y-5`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className={LABEL}>Title (Display Name) <span className="text-red-400">*</span></label>
                                <input type="text" name="title" value={product.title} onChange={handleInput} placeholder="e.g. Shinebedd Bed Set" className={INPUT} required />
                            </div>
                            <div>
                                <label className={LABEL}>Subtitle</label>
                                <input type="text" name="subtitle" value={product.subtitle || ""} onChange={handleInput} placeholder="e.g. BED SET" className={INPUT} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label className={LABEL}>Category</label>
                                <div className="relative">
                                    <select name="category" value={product.category} onChange={handleInput} className={`${INPUT} appearance-none pr-10`}>
                                        {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            {/* <div className="flex items-end">
                                <label className="flex items-center gap-3 cursor-pointer px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl w-full">
                                    <input type="checkbox" name="isNew" checked={product.isNew || false} onChange={handleCheck} className="w-4 h-4 rounded accent-primary" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Mark as New</span>
                                </label>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* ── 2. Description (Multilingual) ── */}
                <div className={CARD}>
                    <div className={`${CARD_HEADER} flex items-center justify-between`}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Globe size={16} className="text-primary" /> Description
                        </h3>
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
                            {(["fr", "en", "tr"] as Language[]).map((l) => (
                                <button key={l} type="button" onClick={() => setDescLang(l)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${descLang === l ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"}`}>
                                    {LANG_FLAGS[l]} {LANG_LABELS[l]}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={CARD_BODY}>
                        <textarea value={product.description[descLang]} onChange={(e) => handleDesc(descLang, e.target.value)}
                            placeholder={`Enter ${LANG_LABELS[descLang]} description...`} className={`${TEXTAREA} h-32`} />
                        <div className="flex gap-2 mt-3">
                            {(["fr", "en", "tr"] as Language[]).map((l) => (
                                <span key={l} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${product.description[l] ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`}>
                                    {LANG_FLAGS[l]} {product.description[l] ? "Done" : "Empty"}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── 3. Dimensions ── */}
                <div className={CARD}>
                    <div className={CARD_HEADER}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Ruler size={16} className="text-primary" /> Dimensions
                        </h3>
                    </div>
                    <div className={`${CARD_BODY}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                            {(['totalHeight', 'mattressHeight', 'baseHeight'] as const).map((key) => {
                                const labels = { totalHeight: "Total Height", mattressHeight: "Mattress Height", baseHeight: "Base Height" };
                                const placeholders = { totalHeight: "130 cm", mattressHeight: "38 cm", baseHeight: "33 cm" };
                                const imgValue = product.dimensions?.[`${key}Image` as keyof ProductDimensions];
                                return (
                                    <div key={key} className="space-y-3">
                                        <label className={LABEL}>{labels[key]}</label>
                                        <input type="text" value={product.dimensions?.[key] || ""} onChange={(e) => handleDimension(key, e.target.value)} placeholder={placeholders[key]} className={INPUT} />
                                        <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                                            <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden shrink-0 border border-gray-100 dark:border-gray-700">
                                                {imgValue ? <img src={imgValue as string} className="w-full h-full object-cover" /> : <ImageIcon size={14} className="text-gray-300" />}
                                            </div>
                                            <div className="flex-1">
                                                <input type="file" onChange={(e) => handleDimensionSpecificImage(key, e)} className="hidden" id={`dim-img-${key}`} accept="image/*" />
                                                <label htmlFor={`dim-img-${key}`} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 transition inline-block">
                                                    {imgValue ? "Change" : "Upload"}
                                                </label>
                                            </div>
                                            {imgValue && (
                                                <button type="button" onClick={() => setProduct(p => ({ ...p, dimensions: { ...(p.dimensions || {}), [`${key}Image`]: undefined } }))} className="text-gray-400 hover:text-red-500"><Trash2 size={12} /></button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                            <label className={LABEL}>Dimensions Diagram (Optional)</label>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
                                    {product.dimensionsImage ? (
                                        <img src={product.dimensionsImage} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <ImageIcon size={20} className="text-gray-300" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <input type="file" onChange={handleDimensionsImage} className="hidden" id="dim-img" accept="image/*" />
                                    <label htmlFor="dim-img" className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-50 transition">
                                        <Upload size={14} /> {product.dimensionsImage ? "Change Diagram" : "Upload Diagram"}
                                    </label>
                                    <p className="text-[10px] text-gray-400 mt-2 italic">Upload a visual guide for heights (optional)</p>
                                </div>
                                {product.dimensionsImage && (
                                    <button type="button" onClick={() => setProduct(p => ({ ...p, dimensionsImage: undefined }))} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── 4. Features ── */}
                <div className={CARD}>
                    <div className={`${CARD_HEADER} flex items-center justify-between`}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Sparkles size={16} className="text-primary" /> Features ({product.features.length})
                        </h3>
                        <div className="flex gap-2">
                            {availableFeatures.length > 0 && (
                                <button type="button" onClick={() => setShowFeatureImporter(!showFeatureImporter)} className={`text-xs px-3 py-1.5 rounded-lg transition font-medium flex items-center gap-1 ${showFeatureImporter ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"}`}>
                                    <Copy size={12} /> Import
                                </button>
                            )}
                            <button type="button" onClick={addFeature} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition font-medium flex items-center gap-1">
                                <Plus size={12} /> Add Feature
                            </button>
                        </div>
                    </div>
                    <div className={CARD_BODY}>
                        {showFeatureImporter && availableFeatures.length > 0 && (
                            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 animate-in fade-in slide-in-from-top-2">
                                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-4">Bibliothèque de fonctionnalités</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {availableFeatures.map((f, i) => {
                                        const isAdded = product.features.some(existing => existing.name === f.name);
                                        return (
                                            <button key={i} type="button" onClick={() => importFeature(f)} disabled={isAdded} className={`flex flex-col items-center p-3 rounded-xl border transition-all ${isAdded ? "bg-gray-100 dark:bg-gray-800 border-transparent opacity-40 grayscale" : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-sm"}`}>
                                                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                                                    <img src={f.image} alt="" className="max-w-full max-h-full object-contain" />
                                                </div>
                                                <span className="text-[10px] font-medium text-center line-clamp-1">{f.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                        {product.features.length === 0 ? (
                            <div className="text-center py-8 text-gray-400 text-sm"><Sparkles size={24} className="mx-auto mb-2 opacity-40" />No features yet.</div>
                        ) : (
                            <div className="space-y-4">
                                <div className="grid grid-cols-[80px_1fr_40px] gap-4 text-[10px] uppercase tracking-wider text-gray-400 font-semibold px-1">
                                    <span>Icon</span><span>Name</span><span></span>
                                </div>
                                {product.features.map((f, i) => (
                                    <div key={i} className="grid grid-cols-[80px_1fr_40px] gap-4 items-center">
                                        <div className="relative group aspect-square rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                            {f.image ? (
                                                <img src={f.image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <ImageIcon size={14} className="text-gray-300" />
                                            )}
                                            <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer">
                                                <Upload size={12} className="text-white" />
                                                <input type="file" className="hidden" onChange={(e) => handleFeatureImage(i, e)} accept="image/*" />
                                            </label>
                                        </div>
                                        <input type="text" value={f.name} onChange={(e) => updateFeature(i, "name", e.target.value)} placeholder="e.g. Pocket Spring" className={INPUT} />
                                        <button type="button" onClick={() => removeFeature(i)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"><Trash2 size={14} /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* ── 5. Variants ── */}
                <div className={CARD}>
                    <div className={`${CARD_HEADER} flex items-center justify-between`}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Layers size={16} className="text-primary" /> Variants ({product.variants.length})
                        </h3>
                        <button type="button" onClick={addVariant} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition font-medium flex items-center gap-1">
                            <Plus size={12} /> Add Size
                        </button>
                    </div>
                    <div className={CARD_BODY}>
                        <div className="mb-6">
                            <label className={LABEL}>Section Image (One for all variants)</label>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
                                    {product.variantsImage ? <img src={product.variantsImage} alt="" className="w-full h-full object-cover" /> : <ImageIcon size={20} className="text-gray-300" />}
                                </div>
                                <div className="flex-1">
                                    <input type="file" onChange={handleVariantsSectionImage} className="hidden" id="vars-img" accept="image/*" />
                                    <label htmlFor="vars-img" className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-50 transition">
                                        <Upload size={14} /> {product.variantsImage ? "Change Image" : "Upload Image"}
                                    </label>
                                </div>
                                {product.variantsImage && (
                                    <button type="button" onClick={() => setProduct(p => ({ ...p, variantsImage: undefined }))} className="text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                                )}
                            </div>
                        </div>

                        {product.variants.length === 0 ? (
                            <div className="text-center py-8 text-gray-400 text-sm"><Layers size={24} className="mx-auto mb-2 opacity-40" />No variants yet.</div>
                        ) : (
                            <div className="space-y-3">
                                <div className="grid grid-cols-[1fr_120px_120px_40px] gap-3 text-[10px] uppercase tracking-wider text-gray-400 font-semibold px-1">
                                    <span>Dimensions</span><span>Original Price</span><span>Promo Price</span><span></span>
                                </div>
                                {product.variants.map((v, i) => (
                                    <div key={i} className="grid grid-cols-[1fr_120px_120px_40px] gap-3 items-center">
                                        <input type="text" value={v.size} onChange={(e) => updateVariant(i, "size", e.target.value)} placeholder="160x200 cm" className={INPUT} />
                                        <div className="relative">
                                            <input type="number" value={v.price || ""} onChange={(e) => updateVariant(i, "price", Number(e.target.value))} className={`${INPUT} pr-7`} />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">€</span>
                                        </div>
                                        <div className="relative">
                                            <input type="number" value={v.promoPrice || ""} onChange={(e) => updateVariant(i, "promoPrice", Number(e.target.value))} placeholder="—" className={`${INPUT} pr-7`} />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">€</span>
                                        </div>
                                        <button type="button" onClick={() => removeVariant(i)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"><Trash2 size={14} /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* ── 6. Accessories ── */}
                <div className={CARD}>
                    <div className={`${CARD_HEADER} flex items-center justify-between`}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Box size={16} className="text-primary" /> Accessories ({(product.accessories || []).length})
                        </h3>
                        <button type="button" onClick={addAccessory} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition font-medium flex items-center gap-1">
                            <Plus size={12} /> Add Accessory
                        </button>
                    </div>
                    <div className={CARD_BODY}>
                        {(product.accessories || []).length === 0 ? (
                            <div className="text-center py-8 text-gray-400 text-sm"><Box size={24} className="mx-auto mb-2 opacity-40" />No accessories yet (e.g. Nightstand).</div>
                        ) : (
                            <div className="space-y-4">
                                {(product.accessories || []).map((acc, i) => (
                                    <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl space-y-3 border border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold text-gray-500 uppercase">Accessory #{i + 1}</span>
                                            <button type="button" onClick={() => removeAccessory(i)} className="text-gray-400 hover:text-red-500 transition"><Trash2 size={14} /></button>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {(["fr", "en", "tr"] as Language[]).map((l) => (
                                                <div key={l}>
                                                    <label className={LABEL}>{LANG_FLAGS[l]} Name ({l.toUpperCase()})</label>
                                                    <input type="text" value={acc.name[l]} onChange={(e) => updateAccessoryName(i, l, e.target.value)} placeholder={`Name in ${LANG_LABELS[l]}`} className={INPUT} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-end">
                                            <div className="sm:col-span-1">
                                                <label className={LABEL}>Price</label>
                                                <div className="relative">
                                                    <input type="number" value={acc.price || ""} onChange={(e) => updateAccessory(i, { price: Number(e.target.value) })} className={`${INPUT} pr-7`} />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">€</span>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <label className={LABEL}>Promo Price</label>
                                                <div className="relative">
                                                    <input type="number" value={acc.promoPrice || ""} onChange={(e) => updateAccessory(i, { promoPrice: Number(e.target.value) })} placeholder="—" className={`${INPUT} pr-7`} />
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">€</span>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className={LABEL}>Accessory Image</label>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
                                                        {acc.image ? <img src={acc.image} alt="" className="w-full h-full object-cover" /> : <ImageIcon size={14} className="text-gray-300" />}
                                                    </div>
                                                    <input type="file" onChange={(e) => handleAccessoryImage(i, e)} className="hidden" id={`acc-img-${i}`} accept="image/*" />
                                                    <label htmlFor={`acc-img-${i}`} className="text-[10px] font-bold uppercase tracking-wider px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 transition inline-block">
                                                        {acc.image ? "Change" : "Upload"}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* ── 7. Images ── */}
                <div className={CARD}>
                    <div className={CARD_HEADER}>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <ImageIcon size={16} className="text-primary" /> Images ({product.images.length})
                        </h3>
                    </div>
                    <div className={CARD_BODY}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {product.images.map((img, i) => (
                                <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                                        <button type="button" onClick={() => removeImage(i)} className="opacity-0 group-hover:opacity-100 transition bg-red-500 text-white p-2 rounded-full hover:bg-red-600"><Trash2 size={14} /></button>
                                    </div>
                                    {i === 0 && <span className="absolute top-2 left-2 text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-medium">Main</span>}
                                </div>
                            ))}
                            <label className="aspect-square rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition group">
                                {uploading ? <Loader2 size={20} className="text-primary animate-spin" /> : (<><Upload size={20} className="text-gray-400 group-hover:text-primary transition mb-1" /><span className="text-xs text-gray-400 group-hover:text-primary transition">Upload</span></>)}
                                <input type="file" onChange={handleFileUpload} className="hidden" accept="image/*" disabled={uploading} />
                            </label>
                        </div>
                    </div>
                </div>

                {/* ── Submit ── */}
                <div className="flex gap-4">
                    {editingId && (
                        <button type="button" onClick={resetForm} className="px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">Cancel</button>
                    )}
                    <button type="submit" disabled={loading}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 transition shadow-lg shadow-primary/20">
                        {loading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                        {loading ? "Saving..." : editingId ? "Update Product" : "Create Product"}
                    </button>
                </div>
            </form>
        </div>
    );
}

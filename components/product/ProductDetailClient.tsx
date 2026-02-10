"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Product, Language } from "@/lib/types";
import {
    Sparkles, ChevronRight, ArrowRight,
    Truck, ShieldCheck, Phone, X,
    ChevronLeft, Maximize2, Heart
} from "lucide-react";
import Image from "next/image";

const LANG_FLAGS: Record<Language, string> = { en: "🇬🇧", fr: "🇫🇷", tr: "🇹🇷" };

export function ProductDetailClient({ product }: { product: Product }) {
    const [lang, setLang] = useState<Language>("fr");
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomIndex, setZoomIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const currentVariant = product.variants[selectedVariant];
    const hasPromo = currentVariant?.promoPrice && currentVariant.promoPrice < currentVariant.price;
    const displayPrice = hasPromo ? currentVariant.promoPrice : currentVariant?.price;

    const openZoom = (index: number) => {
        setZoomIndex(index);
        setIsZoomed(true);
    };

    const handlePrevZoom = () => {
        setZoomIndex((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
    };

    const handleNextZoom = () => {
        setZoomIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-background-light dark:bg-background-dark min-h-screen"
        >
            {/* Breadcrumb */}
            <nav className="w-full px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 pb-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
                    <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
                    <ChevronRight size={10} className="shrink-0" />
                    <Link href="/collection" className="hover:text-primary transition-colors">Collection</Link>
                    <ChevronRight size={10} className="shrink-0" />
                    <span className="text-gray-900 dark:text-gray-200 font-bold truncate">{product.title}</span>
                </div>
            </nav>

            <section className="w-full px-4 sm:px-6 md:px-12 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                {/* ═══════════════════════════════════════════ */}
                {/*  STACKED SCROLLING GALLERY                  */}
                {/* ═══════════════════════════════════════════ */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Main Featured Image */}
                    {product.images[0] && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 group cursor-zoom-in"
                            onClick={() => openZoom(0)}
                        >
                            <Image
                                src={product.images[0]}
                                alt={`${product.title} - Preview`}
                                fill
                                className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                <button className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center text-gray-500 shadow-xl border border-gray-100 dark:border-gray-700">
                                    <Maximize2 size={18} />
                                </button>
                            </div>

                            {/* New / Promo Badge */}
                            {(product.isNew || hasPromo) && (
                                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                                    {product.isNew && (
                                        <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                                            Nouveau
                                        </span>
                                    )}
                                    {hasPromo && (
                                        <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-red-500/20">
                                            Promo
                                        </span>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Secondary Images Grid */}
                    {product.images.length > 1 && (
                        <div className="lg:col-span-7 space-y-6">
                            {product.images.slice(1).map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: (idx % 2) * 0.1 }}
                                    className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 group cursor-zoom-out"
                                    onClick={() => openZoom(idx + 1)}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.title} - Detail ${idx + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        sizes="(max-width: 1024px) 100vw, 60vw"
                                    />
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center text-gray-400">
                                            <Maximize2 size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/*  STICKY PRODUCT INFO                        */}
                {/* ═══════════════════════════════════════════ */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">

                    {/* Language & Actions */}
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex gap-2">
                            {(["en", "fr", "tr"] as Language[]).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`text-[9px] uppercase px-3 py-1.5 rounded-full border transition-all duration-300 font-bold tracking-widest
                                        ${lang === l
                                            ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 shadow-md"
                                            : "text-gray-400 border-gray-100 dark:border-gray-800 hover:border-gray-400"
                                        }`}
                                >
                                    {LANG_FLAGS[l]} {l}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={`w-11 h-11 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center transition-all duration-300 ${isFavorite ? "text-red-500 bg-red-50 dark:bg-red-500/10 border-red-100 dark:border-red-500/20 shadow-inner" : "text-gray-400 hover:text-red-500 hover:border-red-100"}`}
                        >
                            <Heart size={20} className={isFavorite ? "fill-current" : ""} />
                        </button>
                    </div>

                    {/* Title Block */}
                    <header className="space-y-4 mb-10">
                        <p className="text-xs uppercase tracking-[0.4em] text-primary font-black ml-1">Exclusivités</p>
                        <h1 className="text-5xl md:text-6xl font-display leading-[1.05] text-gray-900 dark:text-white">
                            {product.title}
                        </h1>
                        {product.subtitle && (
                            <p className="text-lg font-light text-gray-400 dark:text-gray-500 tracking-[0.15em] uppercase">
                                {product.subtitle}
                            </p>
                        )}
                    </header>

                    {/* Price Block */}
                    {currentVariant && (
                        <div className="mb-12 flex items-baseline gap-5">
                            <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                                € {displayPrice?.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                            </span>
                            {hasPromo && (
                                <span className="text-xl line-through text-gray-400 font-light italic">
                                    € {currentVariant.price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    <div className="text-gray-600 dark:text-gray-400 leading-[1.8] font-light text-lg whitespace-pre-line mb-12">
                        <p>{product.description[lang]}</p>
                    </div>

                    {/* Features Grid */}
                    {product.features.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-10 border-y border-gray-100 dark:border-gray-800/60 mb-12">
                            {product.features.map((f, i) => (
                                <div key={i} className="flex flex-col items-center text-center group cursor-default">
                                    <div className="w-20 h-20 mb-5 relative flex items-center justify-center grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-700">
                                        {f.image ? (
                                            <Image src={f.image} alt={f.name} fill className="object-contain" />
                                        ) : (
                                            <Sparkles size={32} className="text-gray-200 group-hover:text-primary transition-colors" />
                                        )}
                                    </div>
                                    <span className="text-xs uppercase tracking-widest font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors leading-tight">
                                        {f.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Dimensions / Tech Specs */}
                    {product.dimensions && (product.dimensions.totalHeight || product.dimensions.mattressHeight || product.dimensions.baseHeight) && (
                        <div className="mb-12">
                            <h3 className="text-xs uppercase tracking-[0.25em] font-black mb-8 text-gray-900 dark:text-white">
                                Spécifications
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {(['totalHeight', 'mattressHeight', 'baseHeight'] as const).map((key) => {
                                    const val = product.dimensions?.[key];
                                    const img = product.dimensions?.[`${key}Image` as keyof typeof product.dimensions];
                                    const labels = { totalHeight: "Totale", mattressHeight: "Matelas", baseHeight: "Base" };
                                    if (!val) return null;
                                    return (
                                        <div key={key} className="bg-gray-50 dark:bg-gray-800/40 rounded-2xl p-6 text-center group hover:bg-primary/5 transition-all">
                                            <div className="aspect-square rounded-xl bg-white dark:bg-gray-700/30 relative flex items-center justify-center mb-5 overflow-hidden shadow-sm">
                                                {img ? (
                                                    <Image src={img as string} alt="" fill className="object-contain p-3 group-hover:scale-110 transition-transform duration-700" />
                                                ) : (
                                                    <div className="group-hover:scale-110 transition-all text-gray-200 group-hover:text-primary">
                                                        {key === 'totalHeight' && <Maximize2 size={32} strokeWidth={1} />}
                                                        {/* Other fallback icons can go here */}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="block text-2xl font-bold text-gray-900 dark:text-white">{val}</span>
                                            <span className="block text-[10px] uppercase tracking-widest text-gray-400 mt-1 font-bold">{labels[key]}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Variant Selector (Sizes) */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xs uppercase tracking-[0.25em] font-black text-gray-900 dark:text-white">
                                Dimensions &amp; Prix
                            </h3>
                            {product.variantsImage && (
                                <button className="text-[10px] uppercase tracking-widest font-bold text-primary hover:underline">
                                    Guide des tailles
                                </button>
                            )}
                        </div>

                        <div className="space-y-3">
                            {product.variants.map((v, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedVariant(i)}
                                    className={`w-full flex justify-between items-center px-6 py-5 rounded-2xl border-2 transition-all duration-300
                                        ${selectedVariant === i
                                            ? "border-primary bg-primary/5 dark:bg-primary/10 shadow-lg shadow-primary/10"
                                            : "border-gray-100 dark:border-gray-800/60 hover:border-gray-300 dark:hover:border-gray-600 bg-transparent"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedVariant === i ? "border-primary" : "border-gray-300 dark:border-gray-600"}`}>
                                            {selectedVariant === i && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                        </div>
                                        <span className={`text-base font-bold ${selectedVariant === i ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
                                            {v.size}
                                        </span>
                                    </div>
                                    <div className="flex gap-4 items-baseline">
                                        {v.promoPrice && v.promoPrice < v.price && (
                                            <span className="line-through text-gray-400 text-sm">
                                                € {v.price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                            </span>
                                        )}
                                        <span className={`font-bold text-lg ${v.promoPrice && v.promoPrice < v.price ? "text-red-500" : "text-gray-900 dark:text-white"}`}>
                                            € {(v.promoPrice && v.promoPrice < v.price ? v.promoPrice : v.price).toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Accessories */}
                    {product.accessories && product.accessories.length > 0 && (
                        <div className="mb-12">
                            <h3 className="text-xs uppercase tracking-[0.25em] font-black mb-6 text-gray-900 dark:text-white">
                                Compléments Recommandés
                            </h3>
                            <div className="space-y-3">
                                {product.accessories.map((acc, i) => (
                                    <div key={i} className="flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800/50 hover:border-primary/20 transition-all group">
                                        <div className="flex items-center gap-5">
                                            {acc.image && (
                                                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white dark:bg-gray-700/30 shrink-0 p-2 relative shadow-sm">
                                                    <Image src={acc.image} alt="" fill className="object-contain group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                            )}
                                            <span className="font-bold text-gray-800 dark:text-gray-200">{acc.name[lang] || acc.name.en}</span>
                                        </div>
                                        <div className="flex gap-4 items-baseline">
                                            {acc.promoPrice && acc.promoPrice < acc.price && (
                                                <span className="line-through text-gray-400 text-xs text-right">€ {acc.price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}</span>
                                            )}
                                            <span className={`font-bold text-gray-900 dark:text-white text-right ${acc.promoPrice && acc.promoPrice < acc.price ? "text-red-500" : ""}`}>
                                                € {(acc.promoPrice && acc.promoPrice < acc.price ? acc.promoPrice : acc.price).toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="flex flex-col gap-4 mb-20">
                        <button className="w-full bg-primary text-white py-6 px-8 text-sm uppercase tracking-[0.3em] font-black rounded-2xl flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-[0.98] transition-all duration-500">
                            Demander un Devis
                            <ArrowRight size={20} />
                        </button>
                        <Link
                            href="/showroom"
                            className="w-full text-center border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white py-6 px-8 text-sm uppercase tracking-[0.3em] font-black rounded-2xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-500 block"
                        >
                            Visiter le Showroom
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100 dark:border-gray-800/60">
                        {[
                            { icon: Truck, label: "Livraison\nPremium" },
                            { icon: ShieldCheck, label: "Garantie\n5 Ans" },
                            { icon: Phone, label: "Expert\nDédié" },
                        ].map(({ icon: Icon, label }, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-800/60 flex items-center justify-center text-primary border border-gray-100 dark:border-gray-700/50 shadow-sm">
                                    <Icon size={22} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest leading-loose whitespace-pre-line">{label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/*  ENHANCED ZOOM MODAL                        */}
            {/* ═══════════════════════════════════════════ */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white dark:bg-gray-950 z-[100] flex items-center justify-center"
                    >
                        {/* Status Bar / Top Navigation */}
                        <div className="absolute top-0 left-0 right-0 h-20 px-8 flex items-center justify-between border-b border-gray-50 dark:border-gray-900/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl z-20">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
                                {product.title} <span className="mx-4 text-gray-200">|</span> {zoomIndex + 1} de {product.images.length}
                            </span>
                            <button
                                onClick={() => setIsZoomed(false)}
                                className="w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-all"
                            >
                                <X size={24} className="text-gray-900 dark:text-white" />
                            </button>
                        </div>

                        {/* Navigation Controls */}
                        {product.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevZoom}
                                    className="absolute left-8 w-16 h-16 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white transition-all z-10"
                                >
                                    <ChevronLeft size={36} strokeWidth={1} />
                                </button>
                                <button
                                    onClick={handleNextZoom}
                                    className="absolute right-8 w-16 h-16 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white transition-all z-10"
                                >
                                    <ChevronRight size={36} strokeWidth={1} />
                                </button>
                            </>
                        )}

                        <motion.div
                            key={zoomIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-[90vw] h-[80vh]"
                        >
                            <Image
                                src={product.images[zoomIndex]}
                                alt={product.title}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
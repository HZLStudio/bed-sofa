"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { Product } from "@/lib/types";
import Image from "next/image";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const filterVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

const imageHover: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
    }
};

const buttonHover: Variants = {
    rest: { opacity: 0, y: 10 },
    hover: {
        opacity: 1, y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const CATEGORIES = [
    { value: "all", label: "Tous" },
    { value: "bed", label: "Lits" },
    { value: "mattress", label: "Matelas" },
    { value: "sofa", label: "Canapés" },
    { value: "nightstand", label: "Chevets" },
    { value: "accessory", label: "Accessoires" },
];

export function CollectionClient({ products }: { products: Product[] }) {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts = activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="bg-background-light dark:bg-background-dark min-h-screen"
        >
            {/* Hero Header */}
            <header className="relative h-[60vh] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/uploads/1770743632171-katalog_p08_img01.png"
                        alt="Collection Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                </motion.div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="font-display text-5xl md:text-7xl mb-4 tracking-tight">Notre Collection</h1>
                        <p className="text-lg md:text-xl font-light tracking-widest uppercase opacity-90">
                            {products.length} Produit{products.length !== 1 ? "s" : ""} · Confort & Élégance
                        </p>
                    </motion.div>
                </div>
            </header>

            <main className="max-w-[1600px] mx-auto px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="sticky top-32 space-y-2">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-xs font-bold uppercase tracking-widest text-primary mb-8"
                            >
                                Affiner la Sélection
                            </motion.h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-1"
                            >
                                {CATEGORIES.map((cat) => (
                                    <motion.button
                                        key={cat.value}
                                        variants={filterVariants}
                                        onClick={() => setActiveCategory(cat.value)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all ${activeCategory === cat.value
                                            ? "bg-primary/10 text-primary border-l-2 border-primary"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                                            }`}
                                    >
                                        {cat.label}
                                        {cat.value !== "all" && (
                                            <span className="ml-2 text-xs text-gray-400">
                                                ({products.filter((p) => p.category === cat.value).length})
                                            </span>
                                        )}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-20 text-gray-400">
                                <p className="text-lg">Aucun produit dans cette catégorie.</p>
                                <p className="text-sm mt-2">Ajoutez des produits via le panneau admin.</p>
                            </div>
                        ) : (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                                key={activeCategory} // re-animate on filter change
                            >
                                {filteredProducts.map((product) => (
                                    <motion.div key={product.id} variants={itemVariants}>
                                        <Link href={`/product/${product.id}`} className="group cursor-pointer block">
                                            <motion.div
                                                className="aspect-4/5 overflow-hidden rounded-lg bg-productBg dark:bg-gray-800/40 relative mb-4"
                                                whileHover="hover"
                                                initial="rest"
                                                animate="rest"
                                            >
                                                {product.images[0] ? (
                                                    <motion.div
                                                        variants={imageHover}
                                                        className="w-full h-full relative"
                                                    >
                                                        <Image
                                                            src={product.images[0]}
                                                            alt={product.title}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    </motion.div>
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                        <span className="text-sm">No Image</span>
                                                    </div>
                                                )}
                                                <motion.div
                                                    variants={buttonHover}
                                                    className="absolute bottom-6 left-0 right-0 flex justify-center"
                                                >
                                                    <span className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 shadow-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                                        Aperçu Rapide
                                                    </span>
                                                </motion.div>

                                                {/* Badges */}
                                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                                    {product.isNew && (
                                                        <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                                            Nouveau
                                                        </span>
                                                    )}
                                                    {product.variants.some((v) => v.promoPrice && v.promoPrice < v.price) && (
                                                        <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                                            Promo
                                                        </span>
                                                    )}
                                                </div>
                                            </motion.div>

                                            <div className="space-y-1">
                                                <h3 className="text-lg font-display tracking-tight group-hover:text-primary transition-colors text-gray-900 dark:text-white">
                                                    {product.title}
                                                </h3>
                                                {product.subtitle && (
                                                    <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">{product.subtitle}</p>
                                                )}
                                                <div className="flex items-center gap-2 mt-1">
                                                    {product.variants[0] && (
                                                        <>
                                                            {product.variants[0].promoPrice && product.variants[0].promoPrice < product.variants[0].price ? (
                                                                <>
                                                                    <span className="text-sm line-through text-gray-400">
                                                                        € {product.variants[0].price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                                                    </span>
                                                                    <span className="text-sm font-semibold text-red-500">
                                                                        € {product.variants[0].promoPrice.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                                    À partir de € {product.variants[0].price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                                {product.features.length > 0 && (
                                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                                        {product.features.slice(0, 3).map((f, i) => (
                                                            <span key={i} className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                                                                {f.name}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>
        </motion.div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const mainImage = product.images[0];
    const firstVariant = product.variants[0];
    const hasPromo = firstVariant?.promoPrice && firstVariant.promoPrice < firstVariant.price;

    return (
        <Link href={`/product/${product.id}`} className="group block">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900">
                {/* Promo Badge */}
                {hasPromo && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-[#ef4444] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                            PROMO
                        </span>
                    </div>
                )}

                {/* Main Image */}
                {mainImage ? (
                    <Image
                        src={mainImage}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
                        <span className="text-xs">No Image</span>
                    </div>
                )}

                {/* Hover Action */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="bg-[#c2b29a]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full shadow-2xl">
                        Aperçu Rapide
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-4 space-y-1">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {product.title}
                </h3>
                {product.subtitle && (
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest">
                        {product.subtitle}
                    </p>
                )}

                <div className="flex items-center gap-2 pt-1">
                    {hasPromo && (
                        <span className="text-xs text-gray-400 line-through font-light">
                            € {firstVariant.price.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                        </span>
                    )}
                    <span className={`text-sm font-bold ${hasPromo ? "text-[#ef4444]" : "text-gray-900 dark:text-white"}`}>
                        € {(hasPromo ? firstVariant.promoPrice : firstVariant.price)?.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}
                    </span>
                </div>
            </div>
        </Link>
    );
}

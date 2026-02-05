"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { use, useState } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // In strict Next 15+ we unwrap params with `use` if it's client component or await if server.
    // Since I'm making it "use client" for motion, I should use `use(params)`.
    const { id } = use(params);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-background-light dark:bg-background-dark min-h-screen"
        >
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-6">
                    <div className="aspect-4/5 overflow-hidden bg-productBg dark:bg-gray-800 rounded-lg">
                        <img alt="The Serene Arc Sofa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-iOviUFRBzxltMb3ChTTfe5hUCmFXf3KDyJgyEEIfYmFwT84eV-s3FxmX4y6utbj0J8h9ki7Bp6nDrPYPxMIzuyyrH7wxqi1ClmP97XTcV0vRhXICcJjxTHxLTZlEk1ftC3EHf3_t3_L2ued_5WRk361yCfSUav1JhWMurVHINaVG0QchmTHRJ51cr3auMbZ3bK7ZL5IBgNw-ujNsq5wOxlQk6qePU4YZ68hLeuM8-wX4Bn1MtXOHdkzHOvpKnj4_TMFu2GMbU2s" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <img alt="Texture" className="rounded-lg aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPwZzRrmQpaLVghdaLD9MWSM0NqmdN1OWrlpjjogqP-EXU7yTIGep4TGAm7vaV-lmF4EvBhq2Vyt4FAv18UDRBleOkDGhB7uk1AOU8AIrh6EfWKt8Frjzv6zG4AJ_1OCkcvYE7IxEzAxgNDWWBmpezJsub48_ma5jMJpZhkJ3uXfteKi9VNIIsG2qQTOw_zt7peyD6Cv3vknpmbaAEja6U0mPfl65eZntoK_CMbV7NVygZ5uNxwhsy37GnSSlagv0RKbPgx43nWc" />
                        <img alt="Detail" className="rounded-lg aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC4uSDSx2T7yVIlwOIHUUds6AUhp1AYLvDXLwRHlrOaVQktJ5CBuSw7KVNfetzLR7kWJzyfPeuDhmRGJU8buPhIdoWsPLLOmDJRzNHJNwe6Fyv1L1Tzn2Jo-y_eJN-limMeozVyAQpcbdqh-FwP52ZDlToClY2K9tZlPF9JBBP7E7pySEiMR9wBrtgWPnUyHFCw0K-m_ivCNBrjm_Hjr3Es0nKIMxwthznn7spnq3X2ZNRArHLrSSdUXk5tmgiyopdpnJDRJhQDIY" />
                    </div>
                </div>
                <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-10">
                    <header className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Exclusivités</p>
                        <h1 className="text-5xl md:text-6xl font-display leading-tight text-gray-900 dark:text-white">Le Canapé Serene Arc</h1>
                    </header>
                    <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-lg">
                        <p>Un chef-d'œuvre de minimalisme contemporain, le Canapé Serene Arc réinvente la silhouette traditionnelle avec des lignes fluides et une grâce architecturale.</p>
                    </div>
                    <div className="space-y-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-gray-900 dark:text-white">Dimensions</h3>
                            <p className="text-sm font-light text-gray-600 dark:text-gray-400">L: 280cm | P: 110cm | H: 72cm | H Assise: 42cm</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <button className="flex-1 bg-primary text-white py-5 px-8 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-opacity-80 transition-all rounded-lg">
                            Demander des Infos
                        </button>
                        <Link href="/showroom" className="flex-1 text-center border border-primary text-primary py-5 px-8 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-primary hover:text-white transition-all rounded-lg">
                            Visiter le Showroom
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

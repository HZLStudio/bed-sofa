"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/lib/types";

interface HomeClientProps {
    products: Product[];
}

export function HomeClient({ products }: HomeClientProps) {
    const MotionLink = motion(Link);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                <img alt="Minimalist luxury living room" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvrnoHvzW79rhlVMNk3MMwHhO77TXF-q4nLkDTp4tDqkbBTw_36Ik8kngPAk8Oa4Hg8reg7ef6_MY-KGIgJlYtSEuqvl8FxcSC4Gv-Cg_MGsIzYF6tHBkcWn7eQNd1CyYElnpGe4l2HXgLT1znxhNyKig-OC3bEsWiAWKk3JcKUE2pWj-TEUC4cjF-Xr_HMi-nXs4WkfTh9rgVNXIH-f8JcY5AXf4g3bzmTppM1C6OEUaDLJJr4GXbU8BwgzlDbGGV7kB7h-W_JHQ" />
                <div className="absolute inset-0 hero-gradient"></div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
                    >
                        Le Luxe Discret <br /><span className="italic font-normal">de la Maison.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Mobilier européen sélectionné alliant artisanat intemporel et esthétique minimaliste.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="/collection" className="bg-primary hover:bg-[#b5a896] text-white px-10 py-4 rounded-full font-medium tracking-widest uppercase text-xs transition-all transform hover:scale-105">
                            Voir les Collections
                        </Link>
                        <Link href="/story" className="text-white border-b border-white/40 hover:border-white py-2 px-4 transition-all uppercase text-xs tracking-widest">
                            Notre Histoire
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Categories / Selections */}
            <section className="py-24 px-6 lg:px-12 bg-background-light dark:bg-background-dark">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="font-display text-4xl text-gray-900 dark:text-white mb-4 uppercase tracking-widest">Sélections</h2>
                        <div className="w-12 h-0.5 bg-primary mx-auto"></div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {[
                            { title: "Lits", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9P9wwQ3i7WLrbiWpXQrSpt6-GVrNSMNIgCDmD_w-VN3gXo-YczH61BPrLMYepR2Pg-5GTfY5rBlsNJjSiPOkqVS4ckMCgPxjPdY6D7seFM4YBxF_N4_iQ1bg7lbrHRsHLKOAjhlvGfPitdcjuaCq_Blxw8cl66xfxZpzIv-nPM8M_guoSaK4zgB1UvvKrU1uGYJUXfEu_8g97UPjo0hmZQ51j0lJzH614pFfxiyEatxYK47swUbUB8cjmVCOxW6thixH0mdSNjfY" },
                            { title: "Canapés", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS9yGoHSYBO995ern9HGKsw51AREQdUmkR9YW2TYdBLuy2HHN3LItN-b4BjoBuO2KtaYkw1dp3WEDzEKtlMN1AgPzA69eC87iFaLPUQs-i_sLS_nK3BmbhmhMtcqNDltMjyzlZEXuThBgnzkUkHY_AVbMJOl0ayZyEPaD6LBOSxmNKMf3BOrWNIF6t24pVnhGsCx9juXwql7VoIy_ttFPjnLfyNP7fYAm73JdxEqoy534Dh3-GO_TsEw5ya1iUHc54Yzk0KMUSOQQ" },
                            { title: "Matelas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9t_woUMgU4jeGospT3jeC4v9fLrxyspGAKibDowpyiVvPUXJc5Cci7R2hBN-att5nGQlaetDe-47o8giUASfrAh5-LNfGjfgxaFkHIZ2it-IhISjNWaOWWsUhCrfbEU3B1Ra0gDTKRJa1f0lT5SMLm8zOxiwAKQiOz5_CMrthN85o3HgbtMLuPJCKzw4kJEaJDQM-biCqCWN9ZIIqaOL7PFUCVK52L-bL00lvbhfLJE8cSsybRPoh5Mm5J-r836QZEuTxJyS2NCU" },
                            { title: "Séjour", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT6kOEObTDmNpz-OPLjFy2FPWEJiSJlw42eOKiAh9zCcDlp7EdarlDe1k628hVhpTbHEC2kCjOLw6ngkpKyzjMDAav7a6vhDefb-X3_JzDbHnhj-Ekds6JJsJL-hasm6fmGm7geckZ2rt09PXA1P6Zol-RzKlenDo1YWChJrcVCDrwSiMgDPk8UDGz-wQqChnDM0sf3ekvgAPQ_X6ZfVagf9T7sTYLRN7vvLbJqXw_69SI0q_kNPcwykqipOWJJ1ap3t96IL92Pd4" }
                        ].map((item, idx) => (
                            <MotionLink
                                key={idx}
                                href="/collection"
                                className="group relative aspect-3/4 overflow-hidden rounded-lg shadow-sm bg-white dark:bg-gray-800"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                            >
                                <img alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.img} />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute bottom-8 left-8">
                                    <h3 className="text-white font-display text-2xl mb-2 uppercase tracking-wide">{item.title}</h3>
                                    <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] border-b border-white/30 group-hover:border-white transition-all pb-1">Découvrir</span>
                                </div>
                            </MotionLink>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-24 px-6 lg:px-12 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <p className="text-primary text-[10px] uppercase tracking-[0.4em] font-black mb-4">Nouveautés</p>
                        <h2 className="font-display text-4xl text-gray-900 dark:text-white mb-6 uppercase tracking-widest">La Collection du Moment</h2>
                        <div className="w-12 h-0.5 bg-primary mx-auto"></div>
                    </motion.div>

                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                            {products.slice(0, 8).map((product, idx) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-gray-400">
                            <p className="font-light italic">Nos sélections arrivent bientôt...</p>
                        </div>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center"
                    >
                        <Link href="/collection" className="inline-flex items-center gap-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-10 py-4.5 rounded-full font-bold tracking-[0.2em] uppercase text-xs transition-all hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900">
                            Voir toute la collection
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

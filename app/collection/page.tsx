"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Plus } from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const filterVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
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
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

export default function CollectionPage() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="bg-background-light dark:bg-background-dark min-h-screen"
        >
            <header className="relative h-[60vh] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    alt="Luxury minimalist living room"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxAAW5MuqpHdoVS59VCJyr-NF6HDaQHjbrTFUs5IT5aXpcnITr8Sr6NiyHFpOxTag1Uqp6HpxxlqLKkCLHogT7kSqxypHyHu8FGvDk_O-V1yEGyYtojT3Eu6t5o8XuOZFx-WJeilys4DZdlk_cB865YJhgt1BQdm21qtqUfuEEnhRksnRqtddeRMHNJQBm5wUCiKApJkptGM2R9IjMgTS-CT33oh8bs5axQD9Rv4JOvwL0ClSs7N7rtREbM4FtFV3HfgJVfGNIo0Y"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="font-display text-5xl md:text-7xl mb-4 tracking-tight">La Collection Canapés</h1>
                        <p className="text-lg md:text-xl font-light tracking-widest uppercase opacity-90">Confort Intemporel, Esthétique Raffinée</p>
                    </motion.div>
                </div>
            </header>

            <main className="max-w-[1600px] mx-auto px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
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
                            >
                                {['Type', 'Style', 'Matériau', 'Couleur'].map((filter, i) => (
                                    <motion.div
                                        key={filter}
                                        variants={filterVariants}
                                        className="border-b border-gray-200 dark:border-gray-800 py-4 flex justify-between items-center cursor-pointer group"
                                    >
                                        <span className="text-sm font-medium tracking-wide text-gray-900 dark:text-white group-hover:text-primary transition-colors">{filter.toUpperCase()}</span>
                                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                    </motion.div>
                                ))}
                                <motion.button
                                    variants={filterVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-8 py-3 border border-primary text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-lg"
                                >
                                    Effacer les Filtres
                                </motion.button>
                            </motion.div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                        >
                            {[
                                { title: "Canapé Courbe Lumière", material: "Lin Belge . Chêne Naturel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWvv7FHNXx7ePj_daEktXY5f069RjaEgF1Ectrzx4VYfH_U12q__UUKJ0qzVaqALKZxASeuu_K6HMiJe44_hS6QLbQP3ACXd0HkaxCLn6U6UG0O6xFqRofP1DQyFraeeUemVxBdW34ukAFuVFo-JrYt5ocmM6YBWSbx84YAX9nihEJU2pkGcL9xUhrjbYgcBiwiB-YMnWHQ4juBR0mVrV-iBpIW4HvrKAy8R-mm6TaIdl5iteHca9kL2-rSSElW42uAuyo4_y61Zk" },
                                { title: "Modulable Elysian Velours", material: "Velours Performance . Acier Noir", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3YJrFtshvoMwtQY-_Q6WTdsyCFxlUr1nPsM6I07sSrgpRXPNaAvjjpy-C-XBYeGwGSDBZxsnNKcgewosxdVNx7p734HxCOVSwePkBMeeKkv2FlCpsOGvbTeLyNL0aWleGza3TvxtR1Ncv6bPysWaRDroKMrG8uZ5FyPetNywFCMLQZMFYBZVPxCpQYI2slcskA1gW7DIsa92DlXg58pOIK45tLWJxGGq9xPNUGT9e37F1BKoRCzKTiP1mkIASsntoczFKGZOiiNA" },
                                { title: "Chaise Longue Atlas Cuir", material: "Cuir Italien Pleine Fleur . Noyer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo49fXVmV9tR7bMZptuNr2HoD0VSrCmrk1Z2iaeKyQuGkVU4Dz7JMr3yxEKPr6VFaLY5piTZxBByey1qV7RxH5UnQN00CTtDXbJfj_197MZBR5WbW1i2iX7ShagvnwDTyZG2Mfyo_7Qyr2_tj7We96_VGicUdXgk0wNTQ8uHAk9SSVOMMIJIhoTbih_bVsJ_zSNTIRuTDoTGAsAQhDQ_0ijyP-gXgw09bEXFZq9bbpWHgEefQ5cS-Io3gIICqEvjkhMK8zWkpN_TU" },
                                { title: "Canapé d'Angle Serene", material: "Tissu Bouclé . Aluminium Poli", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhQeqxxyRSyy8d1bZw8CuA0qthuGhbcyxhcqz3-Oj_RplWFWNwkMyBePf2CXtdLf2X0ULCUYUwx8TkKcBUdBUg2meaU5Qba9hxNGGIb8sM6xxCGfzDlJzrvp23hJZlXzIisOroTYRFGawmdR3kUD9WT3BrOyjzLndURjlkPJKIx1WJbyun3u8FTNNGeNP710M027OnlHC3cSjbe5wlYGRmR9nMPbz2C1GoVlTIUcG3es8rVe8Yo0g_nOm3HHB8UcFPN3LE38Kzbxs" },
                                { title: "Méridienne Horizon", material: "Laine Pure . Bois de Frêne", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf2q-IjqcLNPFIHLOm8CuSFgw_yLxX77ekJvWxeKptFk95PXF3Yxg6yvLi2Meo5fsqoy47EdvgdBnpeL17M06p1xUSrW8G7z5roLfHvIa54G-JA7BLO2ER7GpfpnqOMS9JUiyODBVz7CQWcEoFgRbisK3b9vio8HbeQxQJb7BAxkzJdLcHZ9h4A1ZEP2aeYyGaYP3GK8Wb76FE51evZwOUKV1zHkRNP5TSmF80odjT-J2dWlLyAD_M9ivGfhU-qMMGR3zU4rKxzxo" },
                                { title: "Canapé 3 Places Nocturne", material: "Tissage Toile . Base Graphite", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGC5mlbb8JvORt0iSTedBCrhhnGuDvJzrjwoJiikRzFspcMciItKgM5AGtdY7cyF_xdZLEFq5tl6arkG7dj-a0V2nBB057JYDKZNaZAPh-e1s01d22gsou9NEVCfa3Xc8q93pE1oC1oTeSplo9uBSarcQ5FC8QPmLzzaGpVvDXVh5m4Dukj62Wl5VgX8_AXi2w3zvjSSpTdm0v93_9EZWRzYXdYlCsKNk7xOOm1Dy8j1MEUMxE5NJcnexw55hCbCOjlQK_ocpFok0" }
                            ].map((item, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <Link href="/product/1" className="group cursor-pointer block">
                                        <motion.div
                                            className="aspect-4/5 overflow-hidden rounded-lg bg-productBg dark:bg-gray-800/40 relative mb-4"
                                            whileHover="hover"
                                            initial="rest"
                                            animate="rest"
                                        >
                                            <motion.img
                                                variants={imageHover}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                                src={item.img}
                                            />
                                            <motion.div
                                                variants={buttonHover}
                                                className="absolute bottom-6 left-0 right-0 flex justify-center"
                                            >
                                                <button className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 shadow-xl hover:bg-primary hover:text-white transition-colors">
                                                    Aperçu Rapide
                                                </button>
                                            </motion.div>
                                        </motion.div>
                                        <h3 className="text-lg font-display tracking-tight group-hover:text-primary transition-colors text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1 dark:text-gray-400">{item.material}</p>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}

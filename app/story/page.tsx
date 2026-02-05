"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Leaf, Award, Scale } from "lucide-react";
import { useRef } from "react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function StoryPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
        >
            <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: yHero }} className="absolute inset-0">
                    <img alt="Minimalist luxury interior" className="w-full h-full object-cover grayscale-20%" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHMtpAphxWuylwN-iXWxvbsZG9BdfKMSZW4o4AVOfcIMXXgwYNySWEG_DcdSsAkrROH8vbk_pmB3uAlU6HKPPTiC98fGlgQ9FKvraW8ZviXPOOnxXe3zfjaQDni9IAPM8CgYh7e1bb_avXvAT2py9Sc7EJVEdSZkumZls6FQvnM2kAa1AC52uc3Yh8LLFYDZ8f2MdjPmpjaK14EJVGQP4JiCBeQbwWDobWWz4BTH26Q-mRSb_cs7RfU7vOO6bhH5ZJOU_GkbSArU" />
                    <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
                </motion.div>

                <motion.div
                    style={{ opacity: opacityHero }}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center text-white px-4"
                >
                    <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-8xl mb-8 italic drop-shadow-sm">L'Art de Vivre au Calme</motion.h1>
                    <motion.div variants={fadeInUp} className="h-px w-24 bg-white/60 mx-auto my-8"></motion.div>
                    <motion.p variants={fadeInUp} className="text-lg md:text-xl font-light tracking-[0.2em] uppercase opacity-90 max-w-3xl mx-auto backdrop-blur-sm p-4 rounded-xl border border-white/10 bg-white/5">
                        Créer des espaces qui respirent et des meubles qui parlent par le silence.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <div className="w-px h-16 bg-linear-to-b from-white to-transparent"></div>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-background-light dark:bg-background-dark">
                <div className="editorial-grid gap-y-16 lg:gap-y-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 md:col-span-5 flex flex-col justify-center space-y-10"
                    >
                        <span className="text-xs uppercase tracking-[0.4em] text-primary flex items-center gap-4">
                            <span className="w-8 h-px bg-primary"></span>
                            Fondé en 1994
                        </span>
                        <h2 className="font-display text-4xl md:text-6xl leading-tight text-gray-900 dark:text-white">
                            Notre histoire a commencé avec une conviction <span className="italic text-gray-400">simple</span>.
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 font-light leading-relaxed text-lg">
                            <p>Que le vrai luxe n'est pas une question d'excès, mais de pureté de la forme et de qualité des matériaux utilisés. Depuis trois décennies, BED & SOFA est un sanctuaire pour ceux qui apprécient les détails les plus fins de la vie.</p>
                            <p>Ce qui a commencé comme un petit atelier dédié à la tapisserie sur mesure est devenu une destination de premier plan pour des espaces de vie curatés. Notre voyage est celui d'un raffinement continu.</p>
                        </div>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="w-fit text-sm uppercase tracking-widest border-b border-gray-900 dark:border-white pb-1"
                        >
                            Lire le manifeste
                        </motion.button>
                    </motion.div>

                    <div className="col-span-12 md:col-span-6 md:col-start-7 lg:col-start-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="overflow-hidden rounded-sm">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                    alt="Detailed shot of fabric"
                                    className="w-full h-[600px] object-cover shadow-2xl"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0_KnVrhQYungFTkurNudnKJ5TdYeqp4orOkiiDmk7M0ZUEFGqhkCSUqfbD_KSo_iOQ0n7R4hMVE07-MaQvaJXwpyC0y4TmWq19-UbpvMQc9sbey2gX9lcdY70mxr56IFVd2Zl4Qur3IymRQEDGOIdQ_PDdHCcBLO8tn-Th_i7yVBSxdd6-71HMjy8Qg-yVWOfSfRpE0A4_yV2rTYsxtk8fvXAcwDfaRdxnth7z_U8bmcxOKQPfjVnheT1Y5MNQzh2JPJ6C0TNGoM"
                                />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 bg-white dark:bg-zinc-800 p-8 lg:p-12 shadow-xl max-w-xs"
                            >
                                <p className="font-display italic text-2xl text-gray-900 dark:text-white leading-relaxed">"L'élégance, c'est le refus."</p>
                                <p className="text-right text-xs uppercase tracking-widest mt-4 text-gray-500">— Coco Chanel</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-concrete dark:bg-zinc-900 py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <h2 className="font-display text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white">Principes Fondamentaux</h2>
                        <div className="h-px w-24 bg-primary mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-16"
                    >
                        {[
                            { icon: Leaf, title: "Approvisionnement Conscient", desc: "Nous sélectionnons uniquement des matériaux durables qui vieillissent avec grâce." },
                            { icon: Award, title: "Artisanat d'Art", desc: "Chaque pièce est finie à la main par des maîtres artisans qui apportent des décennies d'expertise." },
                            { icon: Scale, title: "Design Calme", desc: "Nous croyons en l'harmonie visuelle. Nos créations offrent une toile de fond pour votre vie." }
                        ].map((p, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="text-center space-y-6 flex flex-col items-center group cursor-default"
                            >
                                <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 shadow-sm">
                                    <p.icon className="w-8 h-8 font-light text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:text-primary" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-display text-2xl uppercase tracking-wider text-gray-900 dark:text-white">{p.title}</h3>
                                <p className="font-light text-gray-600 dark:text-gray-400 leading-relaxed px-4">{p.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

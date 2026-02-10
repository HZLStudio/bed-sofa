"use client";

import { motion } from "framer-motion";

export default function ShowroomPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-background-light dark:bg-background-dark min-h-screen"
        >
            <main className="max-w-7xl mx-auto px-6 py-16">
                <section className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-7xl md:text-8xl font-display font-bold tracking-tighter mb-0 flex flex-col leading-none text-gray-900 dark:text-white">
                        <span>BED</span>
                        <span className="font-serif italic font-light text-6xl md:text-7xl text-smoky-silver my-2">&</span>
                        <span>SOFA</span>
                    </h2>
                    <div className="mt-6 flex items-center space-x-4 text-sm md:text-base uppercase tracking-[0.3em] text-gray-500">
                        <span>Literie</span>
                        <span className="w-1 h-1 bg-smoky-silver rounded-full"></span>
                        <span>Meuble</span>
                        <span className="w-1 h-1 bg-smoky-silver rounded-full"></span>
                        <span>Canapé</span>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="relative w-full h-[500px] overflow-hidden group rounded-lg">
                            <iframe allowFullScreen={true} className="absolute inset-0 w-full h-full border-0 grayscale-map transition-all duration-700 group-hover:scale-105" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca97ef0491e!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647872242194!5m2!1sen!2sfr" title="Emplacement du Showroom"></iframe>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-4">Le Showroom</h3>
                                <address className="not-italic text-lg font-light leading-relaxed text-gray-900 dark:text-white">
                                    128 Rue du Faubourg Saint-Antoine<br />
                                    75012 Paris, France
                                </address>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-4">Heures d'Ouverture</h3>
                                <ul className="text-sm font-light space-y-2 dark:text-gray-400">
                                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1"><span>Lun — Ven</span> <span>10:00 - 19:00</span></li>
                                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1"><span>Samedi</span> <span>11:00 - 18:00</span></li>
                                    <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1 text-gray-400"><span>Dimanche</span> <span>Sur Rendez-vous</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-zinc-900 p-10 shadow-sm border border-gray-100 dark:border-gray-800 rounded-lg">
                            <h3 className="text-2xl font-display mb-8 text-gray-900 dark:text-white">Consultation Personnelle</h3>
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-smoky-silver/40 py-3 px-0 text-sm focus:border-primary focus:ring-0 text-gray-900 dark:text-white outline-none" placeholder="Nom Complet" type="text" />
                                <input className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-smoky-silver/40 py-3 px-0 text-sm focus:border-primary focus:ring-0 text-gray-900 dark:text-white outline-none" placeholder="Adresse Email" type="email" />
                                <button className="w-full bg-primary text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-opacity-90 transition-all rounded-lg">
                                    Réserver une Visite
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}

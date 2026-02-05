import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => (
    <footer className="bg-white dark:bg-gray-950 pt-20 pb-10 border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 whitespace-normal ">
            <div className="space-y-6">
                <div className="flex flex-col">
                    <span className="font-display text-xl tracking-widest font-semibold uppercase text-gray-900 dark:text-white">Bed & Sofa</span>
                    <span className="text-[8px] tracking-[0.3em] uppercase text-gray-600 dark:text-gray-400">Literie . Meuble . Canapé</span>
                </div>
                <p className="text-xs text-stone dark:text-gray-500 leading-loose max-w-xs uppercase tracking-tighter">
                    Intérieurs sophistiqués et meubles haut de gamme depuis 1994. Une qualité qui résiste à l'épreuve du temps.
                </p>
            </div>
            <div>
                <h4 className="font-display text-lg mb-6 text-gray-900 dark:text-white">Explorer</h4>
                <ul className="space-y-3 text-sm font-light text-stone dark:text-gray-400">
                    <li><Link href="/collection" className="hover:text-primary dark:hover:text-white">Salon</Link></li>
                    <li><Link href="/collection" className="hover:text-primary dark:hover:text-white">Chambre</Link></li>
                    <li><Link href="/collection" className="hover:text-primary dark:hover:text-white">Tapisserie Sur Mesure</Link></li>
                    <li><Link href="/collection" className="hover:text-primary dark:hover:text-white">Nouveautés</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-display text-lg mb-6 text-gray-900 dark:text-white">Entreprise</h4>
                <ul className="space-y-3 text-sm font-light text-stone dark:text-gray-400">
                    <li><Link href="/story" className="hover:text-primary dark:hover:text-white">Notre Histoire</Link></li>
                    <li><Link href="#" className="hover:text-primary dark:hover:text-white">Carrières</Link></li>
                    <li><Link href="/showroom" className="hover:text-primary dark:hover:text-white">Showrooms</Link></li>
                    <li><Link href="#" className="hover:text-primary dark:hover:text-white">Journal</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-display text-lg mb-6 text-gray-900 dark:text-white">Newsletter</h4>
                <p className="text-xs text-stone dark:text-gray-400 mb-4 uppercase tracking-widest">Rejoignez notre cercle pour des sélections saisonnières.</p>
                <form className="flex border-b border-gray-300 dark:border-gray-700 pb-2">
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full font-light text-gray-900 dark:text-white outline-none" placeholder="Votre Email" type="email" />
                    <button className="text-stone hover:text-primary dark:hover:text-white" type="button"><ArrowRight className="w-5 h-5" /></button>
                </form>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-stone dark:text-gray-500">
            <p>© 2026 BED & SOFA. All rights reserved.</p>
            <div className="flex space-x-8">
                <Link href="#">Politique de Confidentialité</Link>
                <Link href="#">Conditions d'Utilisation</Link>
                <Link href="#">Accessibilité</Link>
            </div>
        </div>
    </footer>
);

export default Footer;

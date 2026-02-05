"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Navigation = () => {
    const pathname = usePathname();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const toggleDark = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
                when: "afterChildren" as const,
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut" as const,
                when: "beforeChildren" as const,
                staggerChildren: 0.1,
            }
        }
    };

    const mobileItemVariants = {
        closed: {
            opacity: 0,
            x: -20,
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut" as const,
            }
        }
    };

    const links = [
        { href: "/", label: "Accueil" },
        { href: "/collection", label: "Collection" },
        { href: "/story", label: "Notre Histoire" },
        { href: "/showroom", label: "Showroom" },
    ];

    return (
        <motion.nav
            variants={navVariants}
            animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
            initial="visible"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
                <Link href="/" className="flex flex-col items-center group">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-display text-xl sm:text-2xl tracking-widest font-bold uppercase text-gray-900 dark:text-white group-hover:text-primary transition-colors"
                    >
                        Bed & Sofa
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-600 dark:text-gray-400"
                    >
                        Literie . Meuble . Canapé
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium">
                    {links.map((link, index) => (
                        <Link key={link.href} href={link.href} className="relative group">
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.5 }}
                                className={cn(
                                    "block py-2 transition-colors",
                                    pathname === link.href ? 'text-primary' : 'text-gray-600 dark:text-gray-400 group-hover:text-primary'
                                )}
                            >
                                {link.label}
                            </motion.span>
                            {pathname === link.href && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 bottom-0 block w-full h-px bg-primary"
                                />
                            )}
                            <span className="absolute left-0 bottom-0 block w-0 h-px bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4 sm:space-x-6">
                    <motion.button
                        onClick={toggleDark}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ rotate: 180, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {mounted && resolvedTheme === "dark" ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-gray-900" />}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        whileTap={{ scale: 0.9 }}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5 text-gray-900 dark:text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {links.map((link) => (
                                <motion.div
                                    key={link.href}
                                    variants={mobileItemVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "block px-4 py-4 text-base font-medium uppercase tracking-wider rounded-xl transition-all duration-200",
                                            pathname === link.href
                                                ? "text-primary bg-primary/10"
                                                : "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800/50 active:bg-gray-200 dark:active:bg-gray-700"
                                        )}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{link.label}</span>
                                            {pathname === link.href && (
                                                <motion.span
                                                    layoutId="mobile-indicator"
                                                    className="w-2 h-2 rounded-full bg-primary"
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Footer */}
                        <motion.div
                            variants={mobileItemVariants}
                            className="px-4 py-4 border-t border-gray-200 dark:border-gray-800"
                        >
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Literie . Meuble . Canapé
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;

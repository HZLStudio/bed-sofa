(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
"use client";
;
;
;
;
;
// Animation Variants
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};
const filterVariants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};
const imageHover = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.7,
            ease: [
                0.33,
                1,
                0.68,
                1
            ]
        }
    }
};
const buttonHover = {
    rest: {
        opacity: 0,
        y: 10
    },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};
function CollectionPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "d6a7c99a5eb6eda6d69ea3307f2f8159dd73087d0b53d41a52c838ffdda13a11") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6a7c99a5eb6eda6d69ea3307f2f8159dd73087d0b53d41a52c838ffdda13a11";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
            initial: {
                scale: 1.1
            },
            animate: {
                scale: 1
            },
            transition: {
                duration: 1.5,
                ease: "easeOut"
            },
            alt: "Luxury minimalist living room",
            className: "w-full h-full object-cover",
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAAW5MuqpHdoVS59VCJyr-NF6HDaQHjbrTFUs5IT5aXpcnITr8Sr6NiyHFpOxTag1Uqp6HpxxlqLKkCLHogT7kSqxypHyHu8FGvDk_O-V1yEGyYtojT3Eu6t5o8XuOZFx-WJeilys4DZdlk_cB865YJhgt1BQdm21qtqUfuEEnhRksnRqtddeRMHNJQBm5wUCiKApJkptGM2R9IjMgTS-CT33oh8bs5axQD9Rv4JOvwL0ClSs7N7rtREbM4FtFV3HfgJVfGNIo0Y"
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 30
        };
        t2 = {
            opacity: 1,
            y: 0
        };
        t3 = {
            delay: 0.5,
            duration: 0.8
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "relative h-[60vh] overflow-hidden",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t1,
                        animate: t2,
                        transition: t3,
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-display text-5xl md:text-7xl mb-4 tracking-tight",
                                children: "La Collection Canapés"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                                lineNumber: 120,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-light tracking-widest uppercase opacity-90",
                                children: "Confort Intemporel, Esthétique Raffinée"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                                lineNumber: 120,
                                columnNumber: 341
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                        lineNumber: 120,
                        columnNumber: 167
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                    lineNumber: 120,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.8
            },
            className: "text-xs font-bold uppercase tracking-widest text-primary mb-8",
            children: "Affiner la Sélection"
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            "Type",
            "Style",
            "Mat\xE9riau",
            "Couleur"
        ].map(_CollectionPageAnonymous);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full lg:w-64 shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-32 space-y-2",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                variants: filterVariants,
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                className: "w-full mt-8 py-3 border border-primary text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded-lg",
                                children: "Effacer les Filtres"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                                lineNumber: 147,
                                columnNumber: 178
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                        lineNumber: 147,
                        columnNumber: 98
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                lineNumber: 147,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            animate: "visible",
            className: "bg-background-light dark:bg-background-dark min-h-screen",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-[1600px] mx-auto px-8 py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-12",
                        children: [
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: containerVariants,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",
                                    children: [
                                        {
                                            title: "Canap\xE9 Courbe Lumi\xE8re",
                                            material: "Lin Belge . Ch\xEAne Naturel",
                                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWvv7FHNXx7ePj_daEktXY5f069RjaEgF1Ectrzx4VYfH_U12q__UUKJ0qzVaqALKZxASeuu_K6HMiJe44_hS6QLbQP3ACXd0HkaxCLn6U6UG0O6xFqRofP1DQyFraeeUemVxBdW34ukAFuVFo-JrYt5ocmM6YBWSbx84YAX9nihEJU2pkGcL9xUhrjbYgcBiwiB-YMnWHQ4juBR0mVrV-iBpIW4HvrKAy8R-mm6TaIdl5iteHca9kL2-rSSElW42uAuyo4_y61Zk"
                                        },
                                        {
                                            title: "Modulable Elysian Velours",
                                            material: "Velours Performance . Acier Noir",
                                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3YJrFtshvoMwtQY-_Q6WTdsyCFxlUr1nPsM6I07sSrgpRXPNaAvjjpy-C-XBYeGwGSDBZxsnNKcgewosxdVNx7p734HxCOVSwePkBMeeKkv2FlCpsOGvbTeLyNL0aWleGza3TvxtR1Ncv6bPysWaRDroKMrG8uZ5FyPetNywFCMLQZMFYBZVPxCpQYI2slcskA1gW7DIsa92DlXg58pOIK45tLWJxGGq9xPNUGT9e37F1BKoRCzKTiP1mkIASsntoczFKGZOiiNA"
                                        },
                                        {
                                            title: "Chaise Longue Atlas Cuir",
                                            material: "Cuir Italien Pleine Fleur . Noyer",
                                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo49fXVmV9tR7bMZptuNr2HoD0VSrCmrk1Z2iaeKyQuGkVU4Dz7JMr3yxEKPr6VFaLY5piTZxBByey1qV7RxH5UnQN00CTtDXbJfj_197MZBR5WbW1i2iX7ShagvnwDTyZG2Mfyo_7Qyr2_tj7We96_VGicUdXgk0wNTQ8uHAk9SSVOMMIJIhoTbih_bVsJ_zSNTIRuTDoTGAsAQhDQ_0ijyP-gXgw09bEXFZq9bbpWHgEefQ5cS-Io3gIICqEvjkhMK8zWkpN_TU"
                                        },
                                        {
                                            title: "Canap\xE9 d'Angle Serene",
                                            material: "Tissu Boucl\xE9 . Aluminium Poli",
                                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhQeqxxyRSyy8d1bZw8CuA0qthuGhbcyxhcqz3-Oj_RplWFWNwkMyBePf2CXtdLf2X0ULCUYUwx8TkKcBUdBUg2meaU5Qba9hxNGGIb8sM6xxCGfzDlJzrvp23hJZlXzIisOroTYRFGawmdR3kUD9WT3BrOyjzLndURjlkPJKIx1WJbyun3u8FTNNGeNP710M027OnlHC3cSjbe5wlYGRmR9nMPbz2C1GoVlTIUcG3es8rVe8Yo0g_nOm3HHB8UcFPN3LE38Kzbxs"
                                        },
                                        {
                                            title: "M\xE9ridienne Horizon",
                                            material: "Laine Pure . Bois de Fr\xEAne",
                                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf2q-IjqcLNPFIHLOm8CuSFgw_yLxX77ekJvWxeKptFk95PXF3Yxg6yvLi2Meo5fsqoy47EdvgdBnpeL17M06p1xUSrW8G7z5roLfHvIa54G-JA7BLO2ER7GpfpnqOMS9JUiyODBVz7CQWcEoFgRbisK3b9vio8HbeQxQJb7BAxkzJdLcHZ9h4A1ZEP2aeYyGaYP3GK8Wb76FE51evZwOUKV1zHkRNP5TSmF80odjT-J2dWlLyAD_M9ivGfhU-qMMGR3zU4rKxzxo"
                                        },
                                        {
                                            title: "Canap\xE9 3 Places Nocturne",
                                            material: "Tissage Toile . Base Graphite",
                                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGC5mlbb8JvORt0iSTedBCrhhnGuDvJzrjwoJiikRzFspcMciItKgM5AGtdY7cyF_xdZLEFq5tl6arkG7dj-a0V2nBB057JYDKZNaZAPh-e1s01d22gsou9NEVCfa3Xc8q93pE1oC1oTeSplo9uBSarcQ5FC8QPmLzzaGpVvDXVh5m4Dukj62Wl5VgX8_AXi2w3zvjSSpTdm0v93_9EZWRzYXdYlCsKNk7xOOm1Dy8j1MEUMxE5NJcnexw55hCbCOjlQK_ocpFok0"
                                        }
                                    ].map(_CollectionPageAnonymous2)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 260
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                                lineNumber: 158,
                                columnNumber: 236
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                        lineNumber: 158,
                        columnNumber: 182
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                    lineNumber: 158,
                    columnNumber: 130
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}
_c = CollectionPage;
function _CollectionPageAnonymous2(item, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: itemVariants,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/product/1",
            className: "group cursor-pointer block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "aspect-4/5 overflow-hidden rounded-lg bg-productBg dark:bg-gray-800/40 relative mb-4",
                    whileHover: "hover",
                    initial: "rest",
                    animate: "rest",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            variants: imageHover,
                            alt: item.title,
                            className: "w-full h-full object-cover",
                            src: item.img
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                            lineNumber: 190,
                            columnNumber: 277
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: buttonHover,
                            className: "absolute bottom-6 left-0 right-0 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 shadow-xl hover:bg-primary hover:text-white transition-colors",
                                children: "Aperçu Rapide"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                                lineNumber: 190,
                                columnNumber: 484
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                            lineNumber: 190,
                            columnNumber: 384
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                    lineNumber: 190,
                    columnNumber: 119
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-display tracking-tight group-hover:text-primary transition-colors text-gray-900 dark:text-white",
                    children: item.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                    lineNumber: 190,
                    columnNumber: 724
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600 mt-1 dark:text-gray-400",
                    children: item.material
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                    lineNumber: 190,
                    columnNumber: 866
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
            lineNumber: 190,
            columnNumber: 56
        }, this)
    }, idx, false, {
        fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
        lineNumber: 190,
        columnNumber: 10
    }, this);
}
function _CollectionPageAnonymous(filter, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: filterVariants,
        className: "border-b border-gray-200 dark:border-gray-800 py-4 flex justify-between items-center cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium tracking-wide text-gray-900 dark:text-white group-hover:text-primary transition-colors",
                children: filter.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                lineNumber: 193,
                columnNumber: 179
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                className: "w-4 h-4 text-gray-400 group-hover:text-primary transition-colors"
            }, void 0, false, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
                lineNumber: 193,
                columnNumber: 333
            }, this)
        ]
    }, filter, true, {
        fileName: "[project]/Desktop/New folder (69)/bed-sofa/app/collection/page.tsx",
        lineNumber: 193,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CollectionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/New folder (69)/bed-sofa/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Desktop/New folder (69)/bed-sofa/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_New%20folder%20%2869%29_bed-sofa_dce012ed._.js.map
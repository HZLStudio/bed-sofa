(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionClient",
    ()=>CollectionClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const CATEGORIES = [
    {
        value: "all",
        label: "Tous"
    },
    {
        value: "bed",
        label: "Lits"
    },
    {
        value: "mattress",
        label: "Matelas"
    },
    {
        value: "sofa",
        label: "Canapés"
    },
    {
        value: "nightstand",
        label: "Chevets"
    },
    {
        value: "accessory",
        label: "Accessoires"
    }
];
function CollectionClient(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "91d33bd50307c4c52b0ebf740196b602456811babcae7f09bc5afbab1eaca765") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91d33bd50307c4c52b0ebf740196b602456811babcae7f09bc5afbab1eaca765";
    }
    const { products } = t0;
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    if ($[1] !== activeCategory || $[2] !== products) {
        t1 = activeCategory === "all" ? products : products.filter({
            "CollectionClient[products.filter()]": (p)=>p.category === activeCategory
        }["CollectionClient[products.filter()]"]);
        $[1] = activeCategory;
        $[2] = products;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredProducts = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            className: "w-full h-full bg-linear-to-br from-gray-900 via-gray-800 to-primary/30"
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 30
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            delay: 0.5,
            duration: 0.8
        };
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "font-display text-5xl md:text-7xl mb-4 tracking-tight",
            children: "Notre Collection"
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = products.length !== 1 ? "s" : "";
    let t8;
    if ($[9] !== products.length || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "relative h-[60vh] overflow-hidden",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex flex-col justify-center items-center text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: t3,
                        animate: t4,
                        transition: t5,
                        className: "text-center",
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-light tracking-widest uppercase opacity-90",
                                children: [
                                    products.length,
                                    " Produit",
                                    t7,
                                    " \xB7 Confort & \xC9l\xE9gance"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                lineNumber: 166,
                                columnNumber: 237
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                        lineNumber: 166,
                        columnNumber: 155
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                    lineNumber: 166,
                    columnNumber: 68
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[9] = products.length;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 175,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== activeCategory || $[14] !== products) {
        t10 = CATEGORIES.map({
            "CollectionClient[CATEGORIES.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    variants: filterVariants,
                    onClick: {
                        "CollectionClient[CATEGORIES.map() > <motion.button>.onClick]": ()=>setActiveCategory(cat.value)
                    }["CollectionClient[CATEGORIES.map() > <motion.button>.onClick]"],
                    className: `w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all ${activeCategory === cat.value ? "bg-primary/10 text-primary border-l-2 border-primary" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"}`,
                    children: [
                        cat.label,
                        cat.value !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 text-xs text-gray-400",
                            children: [
                                "(",
                                products.filter({
                                    "CollectionClient[CATEGORIES.map() > products.filter()]": (p_0)=>p_0.category === cat.value
                                }["CollectionClient[CATEGORIES.map() > products.filter()]"]).length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 191,
                            columnNumber: 419
                        }, this)
                    ]
                }, cat.value, true, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                    lineNumber: 189,
                    columnNumber: 52
                }, this)
        }["CollectionClient[CATEGORIES.map()]"]);
        $[13] = activeCategory;
        $[14] = products;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-full lg:w-64 shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-32 space-y-2",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "space-y-1",
                        children: t10
                    }, void 0, false, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                        lineNumber: 203,
                        columnNumber: 99
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                lineNumber: 203,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== activeCategory || $[19] !== filteredProducts) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "Aucun produit dans cette catégorie."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                        lineNumber: 211,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2",
                        children: "Ajoutez des produits via le panneau admin."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                        lineNumber: 211,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                lineNumber: 211,
                columnNumber: 68
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",
                children: filteredProducts.map(_CollectionClientFilteredProductsMap)
            }, activeCategory, false, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                lineNumber: 211,
                columnNumber: 262
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[18] = activeCategory;
        $[19] = filteredProducts;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t11 || $[22] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-[1600px] mx-auto px-8 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-12",
                children: [
                    t11,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                lineNumber: 220,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t13 || $[25] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            animate: "visible",
            className: "bg-background-light dark:bg-background-dark min-h-screen",
            children: [
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t8;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    return t14;
}
_s(CollectionClient, "OSJOodcB9VWdFfwZDjGR3eSh4To=");
_c = CollectionClient;
function _CollectionClientFilteredProductsMap(product) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: itemVariants,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/product/${product.id}`,
            className: "group cursor-pointer block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "aspect-4/5 overflow-hidden rounded-lg bg-productBg dark:bg-gray-800/40 relative mb-4",
                    whileHover: "hover",
                    initial: "rest",
                    animate: "rest",
                    children: [
                        product.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: imageHover,
                            className: "w-full h-full relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: product.images[0],
                                alt: product.title,
                                fill: true,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                lineNumber: 239,
                                columnNumber: 388
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 319
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex items-center justify-center text-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: "No Image"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                lineNumber: 239,
                                columnNumber: 637
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 559
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: buttonHover,
                            className: "absolute bottom-6 left-0 right-0 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-white/90 backdrop-blur-md px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 shadow-xl group-hover:bg-primary group-hover:text-white transition-colors",
                                children: "Aperçu Rapide"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                lineNumber: 239,
                                columnNumber: 785
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 685
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 left-4 flex flex-col gap-2",
                            children: [
                                product.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                                    children: "Nouveau"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                    lineNumber: 239,
                                    columnNumber: 1097
                                }, this),
                                product.variants.some(_CollectionClientFilteredProductsMapProductVariantsSome) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                                    children: "Promo"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                    lineNumber: 239,
                                    columnNumber: 1305
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 1020
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                    lineNumber: 239,
                    columnNumber: 140
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-display tracking-tight group-hover:text-primary transition-colors text-gray-900 dark:text-white",
                            children: product.title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 1474
                        }, this),
                        product.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-wider text-gray-400 font-medium",
                            children: product.subtitle
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 1640
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-1",
                            children: product.variants[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: product.variants[0].promoPrice && product.variants[0].promoPrice < product.variants[0].price ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm line-through text-gray-400",
                                            children: [
                                                "€ ",
                                                product.variants[0].price.toLocaleString("fr-FR", {
                                                    minimumFractionDigits: 2
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                            lineNumber: 239,
                                            columnNumber: 1907
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-red-500",
                                            children: [
                                                "€ ",
                                                product.variants[0].promoPrice.toLocaleString("fr-FR", {
                                                    minimumFractionDigits: 2
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                            lineNumber: 241,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                                    children: [
                                        "À partir de € ",
                                        product.variants[0].price.toLocaleString("fr-FR", {
                                            minimumFractionDigits: 2
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                                    lineNumber: 243,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 239,
                            columnNumber: 1737
                        }, this),
                        product.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5 mt-2",
                            children: product.features.slice(0, 3).map(_CollectionClientFilteredProductsMapAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                            lineNumber: 245,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
                    lineNumber: 239,
                    columnNumber: 1447
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
            lineNumber: 239,
            columnNumber: 63
        }, this)
    }, product.id, false, {
        fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
        lineNumber: 239,
        columnNumber: 10
    }, this);
}
function _CollectionClientFilteredProductsMapAnonymous(f, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full",
        children: f.name
    }, i, false, {
        fileName: "[project]/Desktop/New folder (69)/bed-sofa/components/collection/CollectionClient.tsx",
        lineNumber: 248,
        columnNumber: 10
    }, this);
}
function _CollectionClientFilteredProductsMapProductVariantsSome(v) {
    return v.promoPrice && v.promoPrice < v.price;
}
var _c;
__turbopack_context__.k.register(_c, "CollectionClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=3d860_New%20folder%20%2869%29_bed-sofa_components_collection_CollectionClient_tsx_01b2e2b3._.js.map
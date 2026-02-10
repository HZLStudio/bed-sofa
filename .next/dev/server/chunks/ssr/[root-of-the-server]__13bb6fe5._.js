module.exports = [
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/Desktop/New folder (69)/bed-sofa/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0096fd0b8b965d7a17ecf62e6d62baf3ebbf223f8c":"getProducts","4014945abcddb4ff7536839f7faba39d2953e2408e":"uploadImage","4027cd32873fdadeed4824268d93ab39a663c01b9e":"deleteProduct","409e4f3d6b358708aa81c19afb3ac1e97fcf6130a8":"getProduct","40ec3378f8f80dda749d4edab5ab4d0ca35fac02f7":"saveProduct"},"",""] */ __turbopack_context__.s([
    "deleteProduct",
    ()=>deleteProduct,
    "getProduct",
    ()=>getProduct,
    "getProducts",
    ()=>getProducts,
    "saveProduct",
    ()=>saveProduct,
    "uploadImage",
    ()=>uploadImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const DATA_FILE_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "products.json");
const UPLOAD_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads");
// Ensure upload directory exists
async function ensureUploadDir() {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(UPLOAD_DIR);
    } catch  {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(UPLOAD_DIR, {
            recursive: true
        });
    }
}
async function getProducts() {
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(DATA_FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading products:", error);
        return [];
    }
}
async function getProduct(id) {
    const products = await getProducts();
    return products.find((p)=>p.id === id);
}
async function saveProduct(product) {
    try {
        const products = await getProducts();
        const existingIndex = products.findIndex((p)=>p.id === product.id);
        if (existingIndex >= 0) {
            products[existingIndex] = product;
        } else {
            products.push(product);
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(DATA_FILE_PATH, JSON.stringify(products, null, 2), "utf-8");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/product/${product.id}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/"); // If we list products on home
        return {
            success: true
        };
    } catch (error) {
        console.error("Error saving product:", error);
        return {
            success: false,
            error: "Failed to save product"
        };
    }
}
async function uploadImage(formData) {
    try {
        await ensureUploadDir();
        const file = formData.get("file");
        if (!file) {
            return {
                success: false,
                error: "No file uploaded"
            };
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        // Sanitize filename
        const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const uniqueFilename = `${Date.now()}-${filename}`;
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(UPLOAD_DIR, uniqueFilename);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, buffer);
        return {
            success: true,
            url: `/uploads/${uniqueFilename}`
        };
    } catch (error) {
        console.error("Error uploading image:", error);
        return {
            success: false,
            error: "Failed to upload image"
        };
    }
}
async function deleteProduct(id) {
    try {
        const products = await getProducts();
        const filteredProducts = products.filter((p)=>p.id !== id);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(DATA_FILE_PATH, JSON.stringify(filteredProducts, null, 2), "utf-8");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/collection");
        return {
            success: true
        };
    } catch (error) {
        console.error("Error deleting product:", error);
        return {
            success: false,
            error: "Failed to delete product"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProducts,
    getProduct,
    saveProduct,
    uploadImage,
    deleteProduct
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "0096fd0b8b965d7a17ecf62e6d62baf3ebbf223f8c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProduct, "409e4f3d6b358708aa81c19afb3ac1e97fcf6130a8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveProduct, "40ec3378f8f80dda749d4edab5ab4d0ca35fac02f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(uploadImage, "4014945abcddb4ff7536839f7faba39d2953e2408e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "4027cd32873fdadeed4824268d93ab39a663c01b9e", null);
}),
"[project]/Desktop/New folder (69)/bed-sofa/.next-internal/server/app/product/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/New folder (69)/bed-sofa/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/app/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/Desktop/New folder (69)/bed-sofa/.next-internal/server/app/product/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/New folder (69)/bed-sofa/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0096fd0b8b965d7a17ecf62e6d62baf3ebbf223f8c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"],
    "4014945abcddb4ff7536839f7faba39d2953e2408e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uploadImage"],
    "4027cd32873fdadeed4824268d93ab39a663c01b9e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"],
    "409e4f3d6b358708aa81c19afb3ac1e97fcf6130a8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"],
    "40ec3378f8f80dda749d4edab5ab4d0ca35fac02f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveProduct"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f2e$next$2d$internal$2f$server$2f$app$2f$product$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/New folder (69)/bed-sofa/.next-internal/server/app/product/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/New folder (69)/bed-sofa/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder__$28$69$292f$bed$2d$sofa$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder (69)/bed-sofa/app/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13bb6fe5._.js.map
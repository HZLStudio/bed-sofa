"use server";

import fs from "fs/promises";
import path from "path";
import { Product } from "@/lib/types";
import { revalidatePath } from "next/cache";

const DATA_FILE_PATH = path.join(process.cwd(), "data", "products.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

// Ensure upload directory exists
async function ensureUploadDir() {
    try {
        await fs.access(UPLOAD_DIR);
    } catch {
        await fs.mkdir(UPLOAD_DIR, { recursive: true });
    }
}

export async function getProducts(): Promise<Product[]> {
    try {
        const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading products:", error);
        return [];
    }
}

export async function getProduct(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((p) => p.id === id);
}

export async function saveProduct(product: Product) {
    try {
        const products = await getProducts();
        const existingIndex = products.findIndex((p) => p.id === product.id);

        if (existingIndex >= 0) {
            products[existingIndex] = product;
        } else {
            products.push(product);
        }

        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(products, null, 2), "utf-8");
        revalidatePath("/admin");
        revalidatePath(`/product/${product.id}`);
        revalidatePath("/"); // If we list products on home
        return { success: true };
    } catch (error) {
        console.error("Error saving product:", error);
        return { success: false, error: "Failed to save product" };
    }
}

export async function uploadImage(formData: FormData) {
    try {
        await ensureUploadDir();
        const file = formData.get("file") as File;
        if (!file) {
            return { success: false, error: "No file uploaded" };
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        // Sanitize filename
        const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const uniqueFilename = `${Date.now()}-${filename}`;
        const filePath = path.join(UPLOAD_DIR, uniqueFilename);

        await fs.writeFile(filePath, buffer);
        return { success: true, url: `/uploads/${uniqueFilename}` };
    } catch (error) {
        console.error("Error uploading image:", error);
        return { success: false, error: "Failed to upload image" };
    }
}

export async function deleteProduct(id: string) {
    try {
        const products = await getProducts();
        const filteredProducts = products.filter((p) => p.id !== id);

        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(filteredProducts, null, 2), "utf-8");
        revalidatePath("/admin");
        revalidatePath("/");
        revalidatePath("/collection");
        return { success: true };
    } catch (error) {
        console.error("Error deleting product:", error);
        return { success: false, error: "Failed to delete product" };
    }
}


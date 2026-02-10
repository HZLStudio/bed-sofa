import { ProductForm } from "@/components/admin/ProductForm";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Header */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                            Product Management
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                            Add, edit, and manage your catalog products
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary"
                    >
                        ← Back to Site
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ProductForm />
            </div>
        </div>
    );
}

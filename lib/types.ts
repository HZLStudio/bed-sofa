export type Language = 'en' | 'fr' | 'tr';

export interface MultilingualString {
    en: string;
    fr: string;
    tr: string;
}

export interface ProductVariant {
    size: string;       // e.g., "140x200 cm"
    price: number;      // Original price
    promoPrice?: number; // Discounted price
}

export interface ProductDimensions {
    totalHeight?: string;
    totalHeightImage?: string;
    mattressHeight?: string;
    mattressHeightImage?: string;
    baseHeight?: string;
    baseHeightImage?: string;
}

export interface Accessory {
    name: MultilingualString;
    price: number;
    promoPrice?: number;
    image?: string;
}

export interface ProductFeature {
    name: string;
    image?: string;
}

export interface Product {
    id: string;
    name: string;
    title: string;
    subtitle?: string;                // e.g., "BED SET"
    description: MultilingualString;
    features: ProductFeature[];       // e.g., [{name: "Pocket Spring", image: "..."}]
    dimensions?: ProductDimensions;
    images: string[];
    variants: ProductVariant[];
    accessories?: Accessory[];        // e.g., nightstand
    category: string;
    isNew?: boolean;
    dimensionsImage?: string; // Optional custom diagram image
    variantsImage?: string;   // Optional image for the variants section
}

import { getProducts } from "@/app/actions";
import { CollectionClient } from "@/components/collection/CollectionClient";

export default async function CollectionPage() {
    const products = await getProducts();

    return <CollectionClient products={products} />;
}

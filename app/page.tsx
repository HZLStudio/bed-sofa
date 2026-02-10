import { getProducts } from "@/app/actions";
import { HomeClient } from "@/components/home/HomeClient";

export default async function HomePage() {
  const products = await getProducts();

  return <HomeClient products={products} />;
}
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
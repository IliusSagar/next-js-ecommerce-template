import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products"

export default function Category() {
  return (
    <div>
      <Navbar />
      <h1 className="p-4 text-xl">Fashion Category</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
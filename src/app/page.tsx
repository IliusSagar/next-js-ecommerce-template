
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import BannerSlider from "./components/BannerSlider";

export default function Home() {
  return (
    <div>
      <Navbar />


  <BannerSlider />    

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
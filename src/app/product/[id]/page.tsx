import Navbar from "../../components/Navbar";
import { products } from "../../data/products";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-10 text-red-500">
        Product Not Found (ID: {id})
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="p-4 max-w-4xl mx-auto">
        <img
          src={product.image}
          className="w-64 h-64 object-cover"
        />

        <h1 className="text-2xl font-bold mt-2">
          {product.name}
        </h1>

        <p>৳ {product.price}</p>

        {/* ✅ STATIC BUTTON */}
        <button className="bg-black text-white px-6 py-2 mt-4 rounded hover:bg-gray-800">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
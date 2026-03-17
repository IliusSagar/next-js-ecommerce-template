import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} className="w-full h-40 object-cover" />
      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p>৳ {product.price}</p>

      <Link href={`/product/${product.id}`} className="text-blue-500">
        View
      </Link>
    </div>
  );
}
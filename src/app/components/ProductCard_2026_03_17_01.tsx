import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
   <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md 
            transform transition duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105">
  
  {/* Product Image */}
  <img 
    src={product.image} 
    alt={product.name} 
    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
  />

  {/* Product Info */}
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-orange-500">
      {product.name}
    </h2>

    <p className="text-orange-500 font-bold mt-1">{`৳ ${product.price}`}</p>

    {/* View Button */}
    <Link 
      href={`/product/${product.id}`} 
      className="inline-block mt-3 px-4 py-2 bg-orange-500 text-white font-medium rounded-full 
                 transition-colors duration-300 hover:bg-orange-600 hover:scale-105 transform"
    >
      View
    </Link>
  </div>
</div>
  );
}
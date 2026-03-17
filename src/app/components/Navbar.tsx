export default function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold">MyShop</h1>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/category">Category</a>
        <a href="/checkout">Checkout</a>
      </div>
    </div>
  );
}
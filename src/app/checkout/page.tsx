"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const router = useRouter();

  return (
    <div>
      <Navbar />

      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl mb-4">Checkout</h1>

        <input placeholder="Name" className="border p-2 w-full mb-2" />
        <input placeholder="Address" className="border p-2 w-full mb-2" />

        <button
          onClick={() => router.push("/success")}
          className="bg-green-500 text-white p-2 w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
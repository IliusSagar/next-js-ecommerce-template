"use client";

import Link from "next/link";
import { ShoppingCart, User, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 shadow-md">

      {/* ------------------ TOPBAR ------------------ */}
    <div className="bg-[#FF6600] text-white px-4 py-1 flex justify-between items-center text-sm">
  {/* Left: contact */}
  <div className="flex items-center gap-4">
    <Phone size={16} />
    <span>+880 123 456 789</span>
  </div>

  {/* Right: social icons */}
  <div className="flex items-center gap-3">
    <a href="#" className="hover:text-gray-200">
      <Facebook size={16} />
    </a>
    <a href="#" className="hover:text-gray-200">
      <Twitter size={16} />
    </a>
    <a href="#" className="hover:text-gray-200">
      <Instagram size={16} />
    </a>
  </div>
</div>

      {/* ------------------ NAVBAR ------------------ */}
    <div className="bg-white px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
  
  {/* Logo */}
  <Link href="/" className="text-2xl font-bold text-[#FF6600]">
    MyShop
  </Link>

  {/* Menu Links */}
  <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
    <Link href="/" className="hover:text-[#FF6600] transition">Home</Link>
    <Link href="/category" className="hover:text-[#FF6600] transition">Category</Link>
    <Link href="/checkout" className="hover:text-[#FF6600] transition">Checkout</Link>
  </nav>

  {/* Search + Icons */}
  <div className="flex items-center gap-4">
    
    {/* Search Bar */}
    <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden">
      <input 
        type="text" 
        placeholder="Search products..." 
        className="px-3 py-1 outline-none w-64"
      />
      <button className="bg-[#FF6600] text-white px-3 py-1 hover:bg-[#e65c00] transition">
        Search
      </button>
    </div>

    {/* Cart */}
    <Link href="/checkout" className="relative p-2 rounded-full hover:bg-gray-100 transition">
      <ShoppingCart size={20} className="text-[#FF6600]" />
      <span className="absolute -top-1 -right-1 bg-[#FF6600] text-white text-xs px-1.5 py-0.5 rounded-full">
        2
      </span>
    </Link>

    {/* Login */}
    <Link href="/login" className="flex items-center gap-1 bg-[#FF6600] text-white px-3 py-1.5 rounded-full hover:bg-[#e65c00] transition">
      <User size={16} /> Login
    </Link>
  </div>

</div>
    </header>
  );
}
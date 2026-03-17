"use client";

import { useEffect, useState } from "react";

type Banner = {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
};

const banners: Banner[] = [
  { id: 1, image: "/banners/banner1.jpg", title: "Big Sale", subtitle: "Up to 50% off!" },
  { id: 2, image: "/banners/banner2.jpg", title: "New Arrivals", subtitle: "Latest Collection" },
  { id: 3, image: "/banners/banner3.jpg", title: "Limited Offer", subtitle: "Hurry Up!" },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl">

        {/* Slides */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay Text */}
            {banner.title && (
              <div className="absolute top-1/4 left-8 text-white">
                <h2 className="text-3xl font-bold">{banner.title}</h2>
                {banner.subtitle && (
                  <p className="mt-2 text-lg">{banner.subtitle}</p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Left Button */}
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? banners.length - 1 : prev - 1
            )
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % banners.length)
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-orange-500" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
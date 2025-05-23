import { useState, useEffect } from "react";
import skincareData from "../data/skincare.json";
import Header from "../layouts/Header";

export default function BestSeller() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Filter produk dengan flag bestSeller: true
    const filtered = skincareData.filter((item) => item.bestSeller === true);
    setBestSellers(filtered);
  }, []);

  // Fungsi hitung diskon
  const getDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  return (
    <div id="bestseller-container">
      <Header />

      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-hijau">Best Seller Skincare</h1>
        <p className="text-gray-600 mt-2">Produk pilihan terbaik dari pelanggan kami ✨</p>
      </div>

      <div className="px-6 pb-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bestSellers.map((item, index) => {
          const discount = 35; // Diskon statis, bisa ubah jadi dinamis kalau mau
          const finalPrice = getDiscountedPrice(item.price, discount);

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {discount}% OFF
                </div>
              </div>

              <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <p className="text-lg font-bold text-hijau">Rp{finalPrice.toLocaleString("id-ID")}</p>
                <p className="text-sm line-through text-gray-400">Rp{item.price.toLocaleString("id-ID")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

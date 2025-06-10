import { useState } from "react";
import skincareData from "../data/skincare.json";
import Header from "../layouts/Header";
import { Link } from "react-router-dom";

export default function Skincare() {
  const [skincare, setSkincare] = useState(skincareData);
  // Fungsi untuk menghitung harga diskon
  const getDiscountedPrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  return (
    <div id="skincare-container">
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skincare.map((item, index) => {
          const discount = 30; // contoh diskon 30%
          const finalPrice = getDiscountedPrice(item.price, discount);

          return (
            <Link to={`/skincare/${item.id}`}>
  <div
    key={index}
    className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
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
</Link>
          );
        })}
      </div>
    </div>
  );
}

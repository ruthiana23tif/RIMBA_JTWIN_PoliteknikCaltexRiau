import { useState } from "react";
import makeupData from "../data/makeup.json";
import { Link } from "react-router-dom";


export default function Makeup() {
  const [makeup, setMakeup] = useState(makeupData);

  return (
    <div id="makeup-container">
      <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {makeup.map((item, index) => {
  const finalPrice = Math.round(item.price * ((100 - item.discount) / 100));
  return (
    <Link to={`/makeup/${item.id}`} key={index}>
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-56 object-contain p-4"
    />

    <div className="px-4 pb-4">
      <p className="text-sm text-gray-700 font-semibold line-clamp-2 mb-2">{item.name}</p>
      <div className="flex items-center space-x-2">
        <p className="text-lg font-bold text-green-600">Rp{finalPrice.toLocaleString()}</p>
        <p className="text-sm text-gray-400 line-through">Rp{item.price.toLocaleString()}</p>
      </div>
    </div>
  </div>
</Link>

  );
})}

      </div>
    </div>
  );
}

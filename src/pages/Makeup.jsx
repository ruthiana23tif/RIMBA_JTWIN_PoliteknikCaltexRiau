import { useState } from "react";
import makeupData from "../data/makeup.json";
import { Link } from "react-router-dom";

export default function Makeup() {
  const [makeup, setMakeup] = useState(makeupData);

  return (
    <div id="makeup-container" className="p-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {makeup.map((item, index) => {
          const finalPrice = Math.round(item.price * ((100 - item.discount) / 100));
          return (
            <Link to={`/makeup/${item.id}`} key={index} className="group">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg relative border">
                {/* Badge Diskon */}
                {item.discount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    -{item.discount}%
                  </div>
                )}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-contain p-4 bg-white"
                />

                <div className="px-4 pb-4">
                  <p className="text-gray-800 text-sm font-medium line-clamp-2 mb-2">
                    {item.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <p className="text-green-600 font-bold text-sm">
                      Rp{finalPrice.toLocaleString("id-ID")}
                    </p>
                    <p className="text-gray-400 text-xs line-through">
                      Rp{item.price.toLocaleString("id-ID")}
                    </p>
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

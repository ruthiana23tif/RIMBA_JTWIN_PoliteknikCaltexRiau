import { useEffect, useState } from "react";
import { skincareAPI } from "../services/skincareAPI";
import { Link } from "react-router-dom";

export default function Skincare() {
  const [skincare, setSkincare] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await skincareAPI.fetchAll();
        setSkincare(data);
      } catch (error) {
        console.error("Gagal mengambil data skincare:", error);
      }
    };
    fetchData();
  }, []);

  const getDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div id="skincare-container" className="px-6 py-5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Skincare</h2>
        <p className="text-sm text-gray-500 mt-2">Temukan produk skincare terbaik untuk kulitmu ✨</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skincare.map((item) => {
          const finalPrice = getDiscountedPrice(item.price, item.discount);

          return (
            <Link to={`/skincare/${item.id}`} key={item.id}>
              <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  {item.discount > 0 && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {item.discount}% OFF
                    </div>
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-lg font-bold text-rose-600">
                    Rp{finalPrice.toLocaleString("id-ID")}
                  </p>
                  <p className="text-sm line-through text-gray-400">
                    Rp{item.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

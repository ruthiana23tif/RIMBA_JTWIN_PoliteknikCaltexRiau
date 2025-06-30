import { useEffect, useState } from "react";
import { makeupAPI } from "../services/makeupAPI";
import { Link } from "react-router-dom";

export default function Makeup() {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeupAPI.fetchMakeup();
        setMakeup(data);
      } catch (error) {
        console.error("Gagal mengambil data makeup:", error);
      }
    };
    fetchData();
  }, []);

  const getDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Judul Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Makeup Collection</h2>
        <p className="text-sm text-gray-500 mt-2">
          Temukan produk makeup terbaik untuk tampil memukau ✨
        </p>
      </div>

      {/* Grid Produk */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {makeup.length === 0 ? (
          <p className="text-center text-gray-500">Produk belum tersedia.</p>
        ) : (
          makeup.map((item) => {
            const finalPrice = getDiscountedPrice(item.price, item.discount);

            return (
              <Link to={`/makeup/${item.id}`} key={item.id}>
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-4 hover:ring-2 hover:ring-pink-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={item.image1 || "/default-image.png"}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-image.png";
                      }}
                      className="w-full h-52 object-cover rounded-2xl mb-4"
                    />
                    {item.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-pink-500/90 text-white text-xs px-2 py-1 rounded-full shadow">
                        {item.discount}% OFF
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.name?.trim() || "Produk Tanpa Nama"}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <p className="text-lg font-bold text-pink-600">
                      Rp{finalPrice.toLocaleString("id-ID")}
                    </p>
                    {item.discount > 0 && (
                      <p className="text-sm line-through text-gray-400">
                        Rp{item.price.toLocaleString("id-ID")}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}

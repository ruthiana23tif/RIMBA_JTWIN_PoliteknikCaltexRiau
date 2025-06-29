import { useEffect, useState } from "react";
import { makeupAPI } from "../services/makeupAPI";
import { Link } from "react-router-dom";

export default function Makeup() {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await makeupAPI.fetchMakeup();
      setMakeup(data);
    };
    fetchData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Produk Makeup</h2>

      {makeup.length === 0 ? (
        <p className="text-center text-gray-500">Produk belum tersedia.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {makeup.map((item) => {
            const finalPrice =
              typeof item.price === "number"
                ? Math.round(item.price * ((100 - item.discount) / 100))
                : 0;

            return (
              <Link
                to={`/makeup/${item.id}`}
                key={item.id}
                className="group relative rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white"
              >
                {/* Badge Diskon */}
                {item.discount > 0 && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                    -{item.discount}%
                  </span>
                )}

                {/* Gambar */}
                <div className="overflow-hidden rounded-t-xl bg-gray-50 h-48 flex items-center justify-center">
                  <img
                    src={item.image1 || "/default-image.png"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-image.png";
                    }}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Detail */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                    {item.name?.trim() || "Produk Tanpa Nama"}
                  </h3>

                  {typeof item.price === "number" && item.price > 0 ? (
                    <div className="flex items-center gap-2">
                      <p className="text-green-600 font-bold text-sm">
                        Rp{finalPrice.toLocaleString("id-ID")}
                      </p>
                      <p className="text-gray-400 text-xs line-through">
                        Rp{item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  ) : (
                    <p className="text-red-500 text-sm">Harga tidak tersedia</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

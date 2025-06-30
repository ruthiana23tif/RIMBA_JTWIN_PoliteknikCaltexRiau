"use client";
import { useEffect, useState } from "react";
import { makeupAPI } from "../services/makeupAPI";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PER_PAGE = 4;

export default function MakeupList() {
  const [makeup, setMakeup] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await makeupAPI.getAll();
        setMakeup(data);
      } catch (error) {
        console.error("Gagal mengambil data makeup:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset ke halaman 1 setiap kali search
  };

  const filteredMakeup = makeup.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMakeup.length / PER_PAGE);
  const displayedMakeup = filteredMakeup.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const getDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  if (loading) return <div className="text-center py-16">Loading...</div>;

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]"
      >
        Makeup Collection
      </motion.h2>

      {/* Search */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search makeup product..."
          value={search}
          onChange={handleSearchChange}
          className="w-full p-3 border border-pink-300 focus:border-pink-500 rounded-lg shadow-sm focus:outline-none"
        />
      </div>

      {/* Grid */}
      {displayedMakeup.length === 0 ? (
        <p className="text-center text-gray-500">Produk tidak ditemukan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedMakeup.map((item, index) => {
            const finalPrice = getDiscountedPrice(item.price, item.discount);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:ring-2 hover:ring-pink-300 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <Link to={`/makeup/${item.id}`}>
                  <div className="relative">
                    <img
                      src={item.image1 || "/default-image.png"}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-image.png";
                      }}
                      className="w-full h-52 object-cover rounded-t-3xl"
                    />
                    {item.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-pink-500/90 text-white text-xs px-2 py-1 rounded-full shadow">
                        {item.discount}% OFF
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                      {item.name}
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
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {filteredMakeup.length > PER_PAGE && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-pink-500 text-white hover:bg-pink-600"
            }`}
          >
            &larr; Prev
          </button>

          <span className="text-sm text-gray-700 font-semibold">
            Page {page} of {totalPages || 1}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages || totalPages === 0}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              page === totalPages || totalPages === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-pink-500 text-white hover:bg-pink-600"
            }`}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </section>
  );
}

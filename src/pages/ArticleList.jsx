"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { artikelAPI } from "../services/artikelAPI";
import { motion } from "framer-motion";

const PER_PAGE = 3;

export default function ArticleList() {
  
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await artikelAPI.fetchArtikel();
        setArticles(data);
      } catch (error) {
        console.error("Gagal ambil artikel:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(articles.length / PER_PAGE);
  const displayedArticles = articles.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  if (loading) return <div className="text-center py-16">Loading...</div>;

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          Recent Blog Posts
        </h1>
        
      </motion.h2>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-pink-300 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col flex-1">
              <Link to={`/articles/${article.id}`}>
                <h3 className="text-lg font-bold text-gray-800 hover:text-pink-600 transition">
                  {article.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mt-2 flex-1 line-clamp-3">
                {article.excerpt || "No summary available."}
              </p>
              <p className="text-xs text-gray-400 mt-3">
                {article.author} • {article.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
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
    </section>
  );
}

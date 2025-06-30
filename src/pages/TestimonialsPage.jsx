"use client";
import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { testimoniAPI } from "../services/testimoniAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await testimoniAPI.fetchTestimonials();
        setTestimonials(result);
      } catch (err) {
        setError(err.message || "Gagal memuat testimoni.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (testimonials.length === 0) return <EmptyState message="Belum ada testimoni saat ini." />;

  return (
    <section className="min-h-screen py-16 px-4 md:px-20 bg-gradient-to-b from-pink-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 opacity-30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400 opacity-20 blur-[120px] rounded-full pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-14 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          Loved by Our Customers 💖
        </h1>
        <p className="text-pink-700/80 text-lg max-w-xl mx-auto mt-3">
          Real stories from our beautiful customers ✨
        </p>
      </motion.div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-pink-300/70 hover:ring-2 hover:ring-pink-300 transform hover:scale-105 transition-all duration-300 group"
          >
            {/* Big Quote Icon */}
            <FaQuoteLeft className="absolute text-pink-200 text-6xl top-4 left-4 opacity-20 group-hover:opacity-40 transition" />

            {/* Testimonial Text */}
            <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
              “{item.quote}”
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4 relative z-10">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-pink-400 object-cover"
              />
              <div>
                <p className="font-semibold text-pink-700">{item.name}</p>
                <p className="text-pink-500 text-xs">{item.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mt-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-lg ${
                    i < item.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </section>
  );
}

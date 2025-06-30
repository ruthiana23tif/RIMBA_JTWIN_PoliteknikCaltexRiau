"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { careerAPI } from "../services/careerAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await careerAPI.fetchJobs();
        setJobs(result);
      } catch (err) {
        setError(err.message || "Gagal memuat lowongan pekerjaan.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (jobs.length === 0) return <EmptyState message="Belum ada lowongan pekerjaan." />;

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 py-16 px-6 md:px-20 text-gray-800 overflow-hidden">

      {/* Background Pink Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-300 opacity-30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Side - Intro and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,105,180,0.6)] mb-6">
            Make Beauty Glow with Us ✨
          </h1>
          <p className="text-pink-700/80 text-lg mb-6">
            We're on a mission to bring glowing beauty to everyone. If you're passionate, creative, and ready to grow—this is your chance!
          </p>
        </motion.div>

        {/* Right Side - Jobs List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          id="jobs"
          className="space-y-6 max-h-[600px] overflow-y-auto pr-2"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md border border-pink-200 rounded-2xl p-6 shadow-md hover:shadow-pink-300/60 hover:ring-2 hover:ring-pink-300 transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-pink-700">{job.title}</h2>
              <p className="text-pink-500 text-sm mb-2">{job.location || "Lokasi tidak tersedia"}</p>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">{job.description || "-"}</p>
              <button className="mt-auto bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </section>
  );
}

"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 via-pink-50 to-white py-24 px-6 sm:px-12">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-300 opacity-30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-pink-400 opacity-20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <div className="flex justify-center mb-4">
          <Sparkles className="text-pink-400 w-10 h-10 animate-pulse drop-shadow-[0_0_10px_rgba(255,105,180,0.5)]" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          Welcome to Glowsphere
        </h1>

        <p className="text-pink-800 text-lg mb-8 max-w-xl mx-auto">
          Experience the future of vibrant, glowing design with soft neon aesthetics.
        </p>

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/pricing">
      <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-3xl shadow-xl shadow-pink-300 transition-transform transform hover:scale-105 active:scale-95 relative overflow-hidden">
        <span className="relative z-10">Explore Now</span>
        <div className="absolute inset-0 bg-pink-400 opacity-20 blur-2xl"></div>
      </button>
    </Link>
        </motion.div>
      </motion.div>

      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </section>
  );
}
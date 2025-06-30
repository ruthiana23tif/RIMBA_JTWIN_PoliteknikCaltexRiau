"use client";
import { useState } from "react";
import { contactusAPI } from "../services/contactusAPI";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactusAPI.sendContactusMessage(form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("DETAIL ERROR:", err.response?.data || err.message);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 sm:px-10 bg-gradient-to-b from-pink-50 via-white to-pink-50 text-gray-800">
      {/* Background blur blob */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-300 opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 drop-shadow-[0_0_20px_rgba(255,105,180,0.5)] mb-4">
          Let’s Get In Touch!
        </h2>
        <p className="text-gray-600 mb-10">
          We'd love to hear from you. Fill out the form and our team will get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 text-left bg-white/80 p-8 rounded-2xl shadow-lg backdrop-blur-md"
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-pink-300 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full font-semibold shadow-xl shadow-pink-300 transition-transform transform hover:scale-105 active:scale-95 relative overflow-hidden disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pink-400 opacity-20 blur-2xl pointer-events-none"></div>
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </section>
  );
}

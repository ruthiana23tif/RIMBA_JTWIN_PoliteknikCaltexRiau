"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqAPI } from "../services/faqAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await faqAPI.fetchFAQs();
        setFaqs(result);
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat memuat FAQ.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (faqs.length === 0) return <EmptyState message="Belum ada pertanyaan yang tersedia." />;

  return (
    <section className="min-h-screen py-16 px-4 md:px-20 
    bg-gradient-to-b from-pink-50 via-white to-pink-50 text-gray-800 relative overflow-hidden"
    //  style={{ backgroundImage: "url('/img/try.png')" }}
     >

      {/* Pink Glow Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 opacity-30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-400 opacity-20 blur-[100px] rounded-full pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          Frequently Asked Questions
        </h1>
        <p className="text-pink-700/80 text-lg max-w-xl mx-auto mt-3">
          Temukan jawaban atas pertanyaan paling umum dari pelanggan kami ✨
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            className={`rounded-2xl shadow-md border border-pink-200 bg-white hover:shadow-pink-300/60 transition-all duration-300 ${
              activeIndex === index ? "ring-2 ring-pink-300" : ""
            }`}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full px-6 py-4 text-left text-pink-700 font-semibold hover:bg-pink-50 transition"
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-pink-500" />
              ) : (
                <FaChevronDown className="text-pink-500" />
              )}
            </button>

            {/* Answer Collapse */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden px-6 pb-4 text-gray-700"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      {/* <img 
  src="/img/try.png" 
  alt="FAQ Background"
  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl opacity-30 pointer-events-none z-0"
/> */}
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { aboutusAPI } from "../services/aboutusAPI";
import TeamList from "./TeamList";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [content, setContent] = useState(null);

  const title = "About Glowsphere";
  const subtitle = "Discover your true glow with our curated skincare and makeup.";

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await aboutusAPI.fetchAboutus();
        if (data && data.length > 0) {
          setContent(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch about us content:", error);
      }
    }
    fetchData();
  }, []);

  if (!content) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white text-gray-800 font-sans relative overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 text-center text-white"
        style={{ backgroundImage: `url(${content.heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300 text-transparent bg-clip-text drop-shadow-lg">
            {title}
          </h1>
          <p className="text-gray-200 text-lg">{subtitle}</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Background pink blob */}
        <div className="absolute -top-20 -left-40 w-[30rem] h-[30rem] bg-pink-300 opacity-20 blur-[150px] rounded-full pointer-events-none" />

        <motion.img
          src={content.sectionImage}
          alt="Glowsphere Team"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-pink-50 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">{content.sectionTitle}</h2>
          <p className="text-gray-700 mb-4">{content.sectionDescription}</p>

          <h4 className="text-pink-500 font-medium mb-2">Our Hours</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            {content.hours?.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.day}:</span> {item.time}
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 mt-6">
            {content.socials?.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 text-2xl transition-transform hover:scale-110"
              >
                {social.icon === "instagram" && <FaInstagram />}
                {social.icon === "facebook" && <FaFacebookF />}
                {social.icon === "whatsapp" && <FaWhatsapp />}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom Section */}
      <section className="bg-pink-50 py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Pink blob background */}
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-pink-200 opacity-20 blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">{content.bottomTitle}</h2>
          <p className="text-gray-700">{content.bottomDescription}</p>
        </motion.div>

        <motion.img
          src={content.bottomImage}
          alt="Skincare Glowshere"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl shadow-2xl"
        />
      </section>

      {/* Team Section */}
      <TeamList />

      {/* Subtle Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teamAPI } from "../services/teamAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";

export default function TeamList() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await teamAPI.fetchTeam();
        setTeam(result);
      } catch (err) {
        setError(err.message || "Gagal memuat data tim.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (team.length === 0) return <EmptyState message="Belum ada anggota tim." />;

  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-40 w-[30rem] h-[30rem] bg-pink-300 opacity-20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-pink-200 opacity-20 blur-[150px] rounded-full pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow"
      >
        Meet Our Team
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-pink-300 transition hover:scale-105 text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-pink-300 shadow-md"
            />
            <h2 className="text-xl font-bold text-pink-600">{member.name}</h2>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional Noise Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </section>
  );
}

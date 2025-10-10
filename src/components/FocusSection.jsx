import React, { useState } from "react";
import { FaShieldAlt, FaPaw, FaUsers, FaFileAlt } from "react-icons/fa";
import { GiTigerHead } from "react-icons/gi";

const FocusSection = () => {
  const focuses = [
    {
      icon: <GiTigerHead size={40} />,
      title: "Monitoring Harimau",
      color: "border-b-blue-500",
      activeBg: "bg-blue-100",
      desc: "Pemantauan harimau dilakukan secara real-time melalui peta interaktif yang menggabungkan data lapangan, sensor, dan teknologi GPS. Dengan pemantauan ini, masyarakat dan pihak konservasi dapat mengetahui lokasi terkini, jalur pergerakan, serta potensi interaksi harimau dengan manusia. Sistem ini membantu mengurangi konflik satwa-manusia sekaligus memberikan gambaran menyeluruh tentang kondisi populasi harimau.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Keamanan Masyarakat",
      color: "border-b-yellow-400",
      activeBg: "bg-yellow-100",
      desc: "Kami berfokus menjaga keamanan masyarakat di sekitar habitat harimau melalui sistem peringatan dini, patroli terpadu, dan kolaborasi antar lembaga konservasi.",
    },
    {
      icon: <FaPaw size={40} />,
      title: "Pelestarian Satwa",
      color: "border-b-green-500",
      activeBg: "bg-green-100",
      desc: "Pelestarian satwa dilakukan dengan menjaga habitat alami, memantau populasi, serta memberikan edukasi masyarakat tentang pentingnya konservasi ekosistem.",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Kolaborasi & Edukasi",
      color: "border-b-pink-400",
      activeBg: "bg-pink-100",
      desc: "Kami bekerja sama dengan sekolah, organisasi, dan masyarakat untuk membangun kesadaran akan pentingnya perlindungan satwa liar dan lingkungan.",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Laporan",
      color: "border-b-purple-500",
      activeBg: "bg-purple-100",
      desc: "Fitur laporan memungkinkan pengguna melihat data pergerakan harimau, laporan lapangan, serta kondisi terkini habitat dan populasi.",
    },
  ];

  const [selected, setSelected] = useState(focuses[0]);

  return (
    <section className="py-10 px-10 bg-[#f8f8f0] flex justify-center">
      <div className="w-full max-w-6xl border-2 border-gray-300 rounded-xl shadow-lg overflow-hidden bg-white transition-all duration-300">
        {/* ✅ Bar Fokus */}
        <div className="grid grid-cols-5 text-center">
          {focuses.map((f, i) => {
            const isActive = selected.title === f.title;
            return (
              <button
                key={i}
                onClick={() => setSelected(f)}
                className={`flex flex-col items-center justify-center gap-3 py-6 transition-all duration-200 border-b-4 
                  ${isActive ? `${f.color} ${f.activeBg}` : "border-transparent bg-gray-100 hover:bg-gray-200"}
                `}
              >
                {f.icon}
                <p
                  className={`font-semibold text-sm ${
                    isActive ? "text-green-900" : "text-gray-700"
                  }`}
                >
                  {f.title.toUpperCase()}
                </p>
              </button>
            );
          })}
        </div>

        {/* ✅ Deskripsi */}
        <div className="p-10 text-center bg-[#f8f8f0]">
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {selected.desc}
          </p>
          <button className="bg-green-700 text-white px-6 py-3 rounded-md shadow hover:bg-green-800 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;

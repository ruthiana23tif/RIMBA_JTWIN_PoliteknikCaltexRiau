import React from "react";
import FocusSection from "../components/FocusSection";

const bgImage = "/img/tiger.png"; // ✅ gunakan path public

const HomeRimba = () => {
  return (
    <div className="font-poppins bg-[#f8f8f0] text-gray-900">
      {/* Hero Section */}
      <section
      
        className="min-h-screen flex flex-col justify-center px-10 md:px-20 text-white relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Monitoring Harimau</h1>
        <p className="text-lg md:text-xl font-light">
          Pentingnya Melindungi Spesies demi Masa Depan Bumi
        </p>
      </section>
<section className="pt-20 pb-0 px-20 text-center bg-[#f8f8f0] transition-all ">
      <h2 className="text-2xl font-semibold mb-3">Our Focus</h2>
      <p className="max-w-3xl mx-auto mb-14 text-gray-600">
        Sistem Monitoring Harimau ini hadir untuk memantau pergerakan harimau secara real-time, menjaga keseimbangan ekosistem, serta memberi peringatan dini demi keamanan masyarakat dan kelestarian satwa.
      </p>
      </section>
      {/* ✅ Focus Section sebagai komponen terpisah */}
      <FocusSection />
    </div>
  );
};

export default HomeRimba;

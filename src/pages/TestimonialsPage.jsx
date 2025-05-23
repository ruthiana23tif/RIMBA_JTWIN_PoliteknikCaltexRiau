import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import testimonialData from "../data/testimonials.json";
import Header from "../layouts/Header";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialData); // langsung assign
  }, []);

  return (
    <>
    <Header/>
<div className=" min-h-screen py-16 px-4 md:px-20 text-gray-800">
  
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">They Trusted Us</h1>
        <p className="text-lg text-white/70 max-w-xl mx-auto">
          Kami sangat senang karena pelanggan kami merasa puas dan bahagia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#982c64] rounded-2xl shadow-xl p-6 relative hover:scale-105 transform transition duration-300"
          >
            <p className="text-white/90 mb-6 italic">“{item.quote}”</p>
            <div className="flex items-ce
            nter gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-yellow-400"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-yellow-400 text-sm">{item.role}</p>
              </div>
            </div>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-lg ${
                    i < item.rating ? "text-yellow-400" : "text-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

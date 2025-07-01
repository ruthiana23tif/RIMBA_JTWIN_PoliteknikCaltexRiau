import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded overflow-hidden">
          <img
            src="/img/lagi.png"
            alt="Promo"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
            <h1 className="text-4xl font-bold">30% discount</h1>
            <h1 className="text-4xl font-bold mb-4">for selected product</h1>
            <Link to="/pricing">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-3xl shadow-xl shadow-pink-300 transition-transform transform hover:scale-105 active:scale-95 relative overflow-hidden">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-pink-400 opacity-20 blur-2xl"></div>
            </button>
          </Link>
          </div>


        </div>
      </div>
    </section>
  );
}

export default function Promo() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded overflow-hidden">
          <img
            src="/img/Glow.jpg"
            alt="Promo"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
            <h1 className="text-4xl font-bold">30% discount</h1>
            <h1 className="text-4xl font-bold mb-4">for selected product</h1>
            <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
    return (
      <section id="hero" className="bg-gray-100 py-20 px-6 text-center relative flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 text-left z-10 px-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Make Your Skin pop with 
            <span className="text-black">GLOWSPHERE</span></h1>
          <p className="text-gray-700 mb-6">
            We care about your skin at GET-GLOW. Your glow is of top priority to us.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/img/gambar.png"
            alt="Hero Woman Skincare"
            className="w-full max-w-md object-cover"
          />
        </div>
      </section>
    );
  }
  
export default function ShopByCategory() {
  const categories = [
    {
      title: "Makeup",
      image: "/img/makeover1.jpg",
    },
    {
      title: "Hand Wash",
      image: "/img/handwash.jpg",
    },
    {
      title: "Body Lotion",
      image: "/img/bodylotion.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-1">Shop by Categories</h2>
            <p className="text-sm text-pink-800">We cover a wide range of beauty products</p>
          </div>
          <button className="text-sm font-semibold text-pink-600 hover:underline flex items-center gap-1">
            See All <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="relative rounded-3xl overflow-hidden shadow-lg shadow-pink-100 hover:shadow-pink-200 transition duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 text-pink-600 text-sm font-semibold px-4 py-2 rounded-xl shadow">
                {cat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

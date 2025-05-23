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
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Shop by Categories</h2>
              <p className="text-sm text-gray-600">We cover a wide range of beauty products</p>
            </div>
            <button className="text-sm font-semibold text-black hover:underline flex items-center gap-1">
              See All <span>&rarr;</span>
            </button>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded">
                  {cat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
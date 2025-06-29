import { Link } from "react-router-dom";

export default function BestSeller() {
  const products = [
    {
      name: "SEA MAKE UP LIP INK",
      price: "₦5,000",
      image: "/img/sea1.jpeg",
    },
    {
      name: "Cosrx Oil-free Ultra-moisturizing Lotion with Birch Sap",
      price: "₦3,000",
      image: "/img/cosrx.jpeg",
    },
    {
      name: "Make Over Ultra Cover Liquid Matt Foundation",
      price: "₦10,000",
      image: "/img/makeover1.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-pink-50 py-16 px-6
">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-2">Best sellers</h2>
        <p className="text-sm text-pink-800 mb-10">
          We cover a wide range of beauty products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-3xl shadow-lg shadow-pink-100 hover:shadow-pink-200 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-contain mb-6"
              />
              <h3 className="font-semibold text-pink-700 text-lg mb-2">{product.name}</h3>
              <p className="text-pink-500 text-sm mb-6">{product.price}</p>
              <div className="flex justify-center gap-3">
                <button className="text-xs border border-pink-500 text-pink-600 px-4 py-2 rounded-xl hover:bg-pink-50 transition">
                  Add to Cart
                </button>
                <button className="text-xs bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link 
          to="/bestseller" 
          className="mt-10 inline-block text-sm font-semibold text-pink-600 hover:underline"
        >
          See All
        </Link>
      </div>
    </section>
  );
}

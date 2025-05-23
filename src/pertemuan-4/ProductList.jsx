import productsData from "./products.json";
import "./tailwind.css";

export default function ProductList() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🛒 Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden p-5 transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 flex justify-between items-center">
                            {item.title}
                            <span className="text-yellow-500 text-lg">⭐ {item.rating}</span>
                        </h2>
                        <p className="text-gray-600 mt-2">{item.description}</p>

                        {/* Brand */}
                        <p className="mt-2 text-sm text-gray-700">
                            <strong className="text-gray-900">Brand:</strong> {item.brand}
                        </p>

                        {/* Harga & Diskon */}
                        <p className="mt-2 text-lg font-bold text-gray-800">
                            ${item.price.toFixed(2)}
                            <span className="text-red-500 text-sm font-medium ml-2">
                                -{item.discountPercentage}%
                            </span>
                        </p>

                        {/* Stock */}
                        <p className={`mt-1 text-sm font-semibold ${item.stock > 10 ? "text-green-600" : "text-red-500"}`}>
                            {item.stock > 10 ? "In Stock" : "Limited Stock!"} ({item.stock} items)
                        </p>

                        {/* Dimensi */}
                        <p className="mt-2 text-xs text-gray-500">
                            <strong>Dimensions:</strong> {item.dimensions.width}mm x {item.dimensions.height}mm x {item.dimensions.depth}mm
                        </p>

                        {/* Tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-medium rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

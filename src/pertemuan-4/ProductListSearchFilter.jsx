import { useState } from "react";
import productsData from "./products.json";
import "./tailwind.css";

export default function ProductListSearchFilter() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredProducts = productsData.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(_searchTerm) ||
            item.description.toLowerCase().includes(_searchTerm) ||
            item.brand.toLowerCase().includes(_searchTerm);
        const matchesTag = dataForm.selectedTag
            ? item.tags.includes(dataForm.selectedTag)
            : true;
        return matchesSearch && matchesTag;
    });

    const allTags = [...new Set(productsData.flatMap((item) => item.tags))];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🛒 Product List with Search & Filter</h1>

            {/* Search Input */}
            <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="Search product..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={handleChange}
            />

            {/* Tag Filter */}
            <select
                name="selectedTag"
                value={dataForm.selectedTag}
                className="w-full p-2 border border-gray-300 rounded mb-6"
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-auto p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <h2 className="text-lg font-semibold text-gray-900 flex justify-between items-center">
                            {item.title}
                            <span className="text-yellow-500 text-sm">⭐ {item.rating}</span>
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm">{item.description}</p>

                        {/* Brand */}
                        <p className="mt-2 text-sm text-gray-700">
                            <strong className="text-gray-900">Brand:</strong> {item.brand}
                        </p>

                        {/* Harga & Diskon */}
                        <p className="mt-2 text-base font-bold text-gray-800">
                            ${item.price.toFixed(2)}
                            <span className="text-red-500 text-xs font-medium ml-2">
                                -{item.discountPercentage}%
                            </span>
                        </p>

                        {/* Stock */}
                        <p className={`mt-1 text-xs font-semibold ${item.stock > 10 ? "text-green-600" : "text-red-500"}`}>
                            {item.stock > 10 ? "In Stock" : "Limited Stock!"} ({item.stock} items)
                        </p>

                        {/* Dimensi */}
                        <p className="mt-2 text-xs text-gray-500">
                            <strong>Dimensions:</strong> {item.dimensions.width}mm x {item.dimensions.height}mm x {item.dimensions.depth}mm
                        </p>

                        {/* Tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-2 py-1 text-xs font-medium rounded-full"
                                >
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

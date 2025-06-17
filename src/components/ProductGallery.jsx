import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* Gambar Utama dengan panah kiri-kanan */}
      <div className="relative w-full h-96 border rounded-xl overflow-hidden flex items-center justify-center bg-white">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-contain transition duration-300"
        />
        {/* Panah Kiri */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        {/* Panah Kanan */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnail */}
      {/* Thumbnail */}
      <div className="flex justify-center gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 border rounded-lg overflow-hidden transition-all ${
              currentIndex === index
                ? "ring-2 ring-rose-400"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

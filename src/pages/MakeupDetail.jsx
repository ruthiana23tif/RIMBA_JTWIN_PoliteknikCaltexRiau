import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeupAPI } from "../services/makeupAPI";
import Accordion from "../components/Accordion";
import ProductGallery from "../components/ProductGallery";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function MakeupDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await makeupAPI.getProductById(id);
        if (result) {
          setProduct(result);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Gagal ambil data:", error.message);
        setProduct(null);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return (
      <div className="p-6 text-red-500">Produk makeup tidak ditemukan.</div>
    );
  }

  const finalPrice = Math.round(
    product.price * ((100 - product.discount) / 100)
  );

  const images = [product.image1, product.image2, product.image3].filter(Boolean);
  const tags = [product.tag1, product.tag2, product.tag3].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* KIRI */}
      <div className="space-y-6">
        <ProductGallery images={images} />
        <Accordion title="Product Overview" content={product.overview} />
        <Accordion title="How To Use" content={product.usage} />
        <Accordion title="Ingredients" content={product.ingredients} />
        <Accordion title="Other Details" content={product.details} />
      </div>

      {/* KANAN */}
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>

        <div className="flex items-center space-x-3">
          <p className="text-2xl text-pink-600 font-semibold">
            Rp{finalPrice.toLocaleString("id-ID")}
          </p>
          <p className="text-sm line-through text-gray-400">
            Rp{product.price.toLocaleString("id-ID")}
          </p>
          <span className="text-xs bg-pink-500 text-white px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        </div>

        {/* <p className="text-gray-600">{product.description}</p> */}
        {/* <p className="text-sm text-gray-500">Vendor: {product.vendor}</p> */}
        <p className="text-sm text-gray-500">SKU: {product.sku}</p>
        <p className="text-sm text-gray-500">Size: {product.size}</p>

        <div className="w-full max-w-md border-t border-b border-gray-300 py-4 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-lg text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-3xl shadow-xl shadow-pink-300 transition-transform transform hover:scale-105 active:scale-95">
              ADD TO CART
            </button>

            <button className="p-2 bg-pink-50 border border-pink-300 hover:bg-pink-100 rounded-full transition">
              ❤️
            </button>
          </div>

          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-3xl shadow-xl shadow-pink-300 transition-transform transform hover:scale-105 active:scale-95">
            BUY IT NOW
          </button>

          <div className="flex items-center space-x-2 text-pink-500 text-sm mt-2">
            <span>Share:</span>
            <a href="#" className="hover:text-pink-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-700">
              <FaInstagram />
            </a>
          </div>

          <p className="text-sm text-green-600 font-semibold">In Stock</p>
        </div>

        <div className="text-sm mt-4 text-gray-600">
          <p className="mt-1 text-xs">Tags: {tags.join(", ")}</p>
        </div>

        <div className="text-sm max-w-md mt-6 text-gray-500">
          <h4 className="font-semibold mb-1">Delivery & Returns</h4>
          <p>
            Produk akan dikirim dalam 1–3 hari kerja. Return diterima dalam 7
            hari setelah barang diterima.
          </p>
        </div>

        <p className="text-sm text-pink-600 underline mt-2 cursor-pointer">
          Our Return Policy
        </p>
      </div>
    </div>
  );
}

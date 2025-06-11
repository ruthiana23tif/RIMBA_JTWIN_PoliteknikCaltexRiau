import { useParams } from "react-router-dom";
import makeupData from "../data/makeup.json";

export default function MakeupDetail() {
  const { id } = useParams();
  const product = makeupData.find((item) => String(item.id) === String(id));

  if (!product) {
    return (
      <div className="p-6 text-red-500">Produk makeup tidak ditemukan.</div>
    );
  }

  const finalPrice = Math.round(
    product.price * ((100 - product.discount) / 100)
  );

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain mb-4 rounded-xl"
        />
        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-sm text-gray-500 mb-2">
          {product.category || "Makeup"}
        </p>

        <div className="flex items-center space-x-2 mt-2">
          <p className="text-xl text-green-600 font-semibold">
            Rp{finalPrice.toLocaleString("id-ID")}
          </p>
          <p className="text-sm line-through text-gray-400">
            Rp{product.price.toLocaleString("id-ID")}
          </p>
          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        </div>

        <p className="text-gray-700 mt-4">
          {product.description || "Tidak ada deskripsi."}
        </p>
      </div>
    </>
  );
}

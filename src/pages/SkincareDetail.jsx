import React from "react";
import { useParams } from "react-router-dom";
import skincareData from "../data/skincare.json";
import Header from "../layouts/Header";

export default function SkincareDetail() {
  const { id } = useParams();
  const product = skincareData.find(item => String(item.id) === String(id));

  if (!product) {
    return <div className="p-6 text-red-500">Produk tidak ditemukan.</div>;
  }

  return (
    <>
     <Header />
    <div className="max-w-2xl mx-auto p-6">
     
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <p className="text-xl text-hijau font-semibold mb-2">
        Rp{product.price.toLocaleString("id-ID")}
      </p>
      <p className="text-gray-700">{product.description}</p>
    </div>
    </>
  );
}

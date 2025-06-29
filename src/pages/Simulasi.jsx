import { useEffect, useState } from "react";
import axios from "axios";
import { simulasiAPI } from "../services/simulasiAPI";
import { FiTrash } from "react-icons/fi"; // Import icon React Icons

export default function SimulasiHarga() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([{ productId: null, qty: 1 }]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await simulasiAPI.fetchSimulasi();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (cart.length === 0) {
      setResult(0);
      alert("Cart kosong. Silakan tambahkan produk baru.");
    }
  }, [cart]);

  const handleChangeCart = (index, field, value) => {
    const updatedCart = [...cart];
    updatedCart[index][field] = field === "qty" ? Number(value) : Number(value);
    setCart(updatedCart);
  };

  const handleAddProduct = () => {
    setCart([...cart, { productId: null, qty: 1 }]);
  };

  const handleRemoveProduct = (index) => {
    const confirmDelete = window.confirm("Yakin mau hapus produk ini?");
    if (confirmDelete) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  const handleCalculate = () => {
    let total = 0;
    cart.forEach((item) => {
      const product = products.find((p) => p.id === Number(item.productId));
      if (product) total += product.price * item.qty;
    });
    setResult(total);
  };

  const handleSave = async () => {
    try {
      for (const item of cart) {
        const product = products.find((p) => p.id === Number(item.productId));
        if (product && item.qty > 0) {
          await axios.post(
            "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/pesanan_simulasi",
            {
              product_id: product.id,
              qty: item.qty,
              total_price: product.price * item.qty,
            },
            {
              headers: {
                apikey: "API_KEY_MU",
                Authorization: "Bearer API_KEY_MU",
                "Content-Type": "application/json",
                Prefer: "return=minimal",
              },
            }
          );
        }
      }
      setSuccess(true);
    } catch (error) {
      console.error("Gagal simpan pesanan:", error);
    }
  };

  if (loading) return <div className="text-center py-10">Loading Produk...</div>;

  return (
    <div className="bg-pink-50 p-6 rounded-xl shadow-md max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4 text-pink-700">Simulasi Harga Produk Skincare</h2>

      {cart.map((item, index) => {
        const selectedProduct = products.find((p) => p.id === Number(item.productId));
        return (
          <div key={index} className="mb-4 border rounded p-3 bg-white">
            {/* Header flex: Label + Icon Delete */}
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Pilih Produk:</label>
              <button
                onClick={() => handleRemoveProduct(index)}
                className="text-red-500 hover:text-red-700"
                title="Hapus Produk"
              >
                <FiTrash size={18} />
              </button>
            </div>

            <select
              value={item.productId || ""}
              onChange={(e) => handleChangeCart(index, "productId", e.target.value)}
              className="w-full p-2 border rounded mb-2"
            >
              <option value="">-- Pilih Produk --</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>

            {selectedProduct && (
              <div className="mb-2 text-pink-800 text-sm">
                Harga Satuan: <strong>Rp {selectedProduct.price.toLocaleString()}</strong>
              </div>
            )}

            <label className="block text-sm mb-1">Jumlah:</label>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => handleChangeCart(index, "qty", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        );
      })}

      <button
        onClick={handleAddProduct}
        className="w-full py-2 mb-4 bg-pink-300 text-pink-800 rounded hover:bg-pink-400"
      >
        + Tambah Produk Lagi
      </button>

      <button
        onClick={handleCalculate}
        className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 mb-3"
      >
        Hitung Total Semua
      </button>

      {result > 0 && (
        <div className="mt-2 text-pink-900 font-semibold text-center text-lg">
          Total Estimasi Semua: Rp {result.toLocaleString()}
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { simulasiAPI } from "../services/simulasiAPI";
import { FiTrash } from "react-icons/fi";

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
      alert("Pesanan berhasil disimpan!");
    } catch (error) {
      console.error("Gagal simpan pesanan:", error);
      alert("Gagal menyimpan pesanan.");
    }
  };

  if (loading) return <div className="text-center py-10">Loading Produk...</div>;

  return (
    <div className="bg-pink-50 p-6 rounded-2xl shadow-xl max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-pink-700 text-center drop-shadow">
        Simulasi Harga Produk Skincare
      </h2>

      {cart.map((item, index) => {
        const selectedProduct = products.find((p) => p.id === Number(item.productId));
        return (
          <div
            key={index}
            className="mb-4 border-2 border-pink-500 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-pink-700">Pilih Produk:</label>
              <button
                onClick={() => handleRemoveProduct(index)}
                className="text-pink-500 hover:text-pink-700 transition"
                title="Hapus Produk"
              >
                <FiTrash size={18} />
              </button>
            </div>

            <select
              value={item.productId || ""}
              onChange={(e) => handleChangeCart(index, "productId", e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            >
              <option value="">-- Pilih Produk --</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>

            {selectedProduct && (
              <div className="mt-2 text-pink-700 text-sm">
                Harga Satuan: <strong>Rp {selectedProduct.price.toLocaleString()}</strong>
              </div>
            )}

            <label className="block text-sm mt-3 text-pink-600">Jumlah:</label>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => handleChangeCart(index, "qty", e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>
        );
      })}

      <button
        onClick={handleAddProduct}
        className="w-full py-2 mb-4 bg-pink-300 text-pink-800 rounded-xl hover:bg-pink-400 active:scale-95 transition"
      >
        + Tambah Produk Lagi
      </button>

      <button
        onClick={handleCalculate}
        className="w-full py-3 bg-pink-500 text-white rounded-2xl shadow hover:bg-pink-600 active:scale-95 transition"
      >
        Hitung Total Semua
      </button>

      {result > 0 && (
        <div className="mt-4 text-pink-900 font-semibold text-center text-lg">
          Total Estimasi: Rp {result.toLocaleString()}
        </div>
      )}

      {result > 0 && (
        <button
          onClick={handleSave}
          className="w-full mt-4 py-2 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 active:scale-95 transition"
        >
          Simpan Pesanan
        </button>
      )}

      {success && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          ✅ Pesanan berhasil disimpan!
        </div>
      )}
    </div>
  );
}

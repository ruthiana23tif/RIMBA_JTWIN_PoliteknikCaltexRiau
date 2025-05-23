import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function AddOrder() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data order baru:", formData);
    alert("Order berhasil ditambahkan! (simulasi)");
    navigate("/orders");
  };

  return (
    <div >
      <PageHeader />

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Tambah Order Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-1">ID Order</label>
            <input
              type="text"
              name="orderId"
              required
              onChange={handleChange}
              placeholder="Contoh: ORD031"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nama Customer</label>
            <input
              type="text"
              name="customerName"
              required
              onChange={handleChange}
              placeholder="Contoh: Putra Aditya"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Total Harga</label>
            <input
              type="number"
              name="totalPrice"
              required
              onChange={handleChange}
              placeholder="Contoh: 150000"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Tanggal Order</label>
            <input
              type="date"
              name="orderDate"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-hijau text-white text-lg font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out shadow"
          >
            Simpan Order
          </button>

        </form>
      </div>
    </div>
  );
}

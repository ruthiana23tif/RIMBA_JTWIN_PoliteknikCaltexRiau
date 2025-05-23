import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function AddCustomer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Regular",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data customer baru:", formData);
    alert("Customer berhasil ditambahkan! (simulasi)");
    navigate("/customers");
  };

  return (
    <div >
      {/* Header Halaman */}
      <PageHeader />

      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Tambah Customer Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              placeholder="Contoh: Nevy Putri"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email Aktif</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              placeholder="nevymail@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nomor Telepon</label>
            <input
              type="text"
              name="phone"
              required
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Kategori Loyalty</label>
            <select
              name="loyalty"
              value={formData.loyalty}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-hijau focus:outline-none"
            >
              <option>Regular</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-hijau text-white text-lg font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out shadow"
          >
            Simpan Customer
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { bookingAPI } from "../services/bookingAPI";
import { skincareAPI } from "../services/skincareAPI";
import { makeupAPI } from "../services/makeupAPI";
import { pricingAPI } from "../services/pricingAPI";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
    product: "",
    quantity: 1,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "product" || name === "quantity") {
        const selectedProduct = productOptions.find(
          (p) => p.name === (name === "product" ? value : prev.product)
        );
        const quantity = name === "quantity" ? Number(value) : Number(prev.quantity);
        const unitPrice = selectedProduct?.price || 0;
        updated.price = unitPrice * quantity;
      }

      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await bookingAPI.createBooking(formData);
      setSuccess("Booking berhasil dibuat!");
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        notes: "",
        product: "",
        quantity: 1,
        price: 0,
      });
      loadBookings();
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Gagal membuat booking: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus booking ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      await bookingAPI.deleteBooking(id);
      loadBookings();
    } catch (err) {
      setError(`Gagal menghapus booking: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await bookingAPI.fetchBookings();
      setBookings(data);
    } catch (err) {
      setError("Gagal memuat daftar booking.");
    } finally {
      setLoading(false);
    }
  };

  const loadAllProducts = async () => {
    try {
      const [makeup, skincare, pricing] = await Promise.all([
        makeupAPI.getAll(),
        skincareAPI.getAll(),
        pricingAPI.getAll(),
      ]);

      const combined = [
        ...makeup.map((item) => ({ ...item, category: "Makeup" })),
        ...skincare.map((item) => ({ ...item, category: "Skincare" })),
        ...pricing.map((item) => ({ ...item, category: "Paket" })),
      ];

      setProductOptions(combined);
    } catch (err) {
      console.error("Gagal mengambil produk:", err.message);
      setError("Gagal mengambil produk.");
    }
  };

  useEffect(() => {
    loadBookings();
    loadAllProducts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
          Form Booking Produk
        </h1>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            disabled={loading}
            onChange={handleChange}
            placeholder="Nama lengkap"
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            disabled={loading}
            onChange={handleChange}
            placeholder="Alamat Email"
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              disabled={loading}
              onChange={handleChange}
              required
              className="w-1/2 p-3 bg-gray-50 rounded-2xl border"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              disabled={loading}
              onChange={handleChange}
              required
              className="w-1/2 p-3 bg-gray-50 rounded-2xl border"
            />
          </div>

          <select
            name="product"
            value={formData.product}
            disabled={loading}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border"
          >
            <option value="">Pilih produk</option>
            {productOptions.map((item, idx) => (
              <option key={idx} value={item.name}>
                {item.name} - Rp{item.price.toLocaleString()}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            disabled={loading}
            onChange={handleChange}
            placeholder="Jumlah"
            min="1"
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border"
          />

          <p className="text-sm text-gray-500">
            Harga total: <strong>Rp{formData.price.toLocaleString()}</strong>
          </p>

          <textarea
            name="notes"
            value={formData.notes}
            disabled={loading}
            onChange={handleChange}
            placeholder="Catatan tambahan (opsional)"
            rows="3"
            className="w-full p-3 bg-gray-50 rounded-2xl border resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-2xl"
          >
            {loading ? "Mengirim..." : "Kirim Booking"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">
            Riwayat Booking ({bookings.length})
          </h3>
        </div>

        {loading && <LoadingSpinner text="Memuat booking..." />}
        {!loading && bookings.length === 0 && !error && (
          <EmptyState text="Belum ada booking yang masuk." />
        )}
        {!loading && bookings.length > 0 && (
          <div className="overflow-x-auto">
            <GenericTable
              columns={[
                "#",
                "Nama",
                "Email",
                "Tanggal",
                "Jam",
                "Produk",
                "Jumlah",
                "Catatan",
                "Aksi",
              ]}
              data={bookings}
              renderRow={(item, index) => (
                <>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4">{item.product}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.notes}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={loading}
                    >
                      <AiFillDelete className="text-pink-400 text-2xl hover:text-pink-600" />
                    </button>
                  </td>
                </>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}

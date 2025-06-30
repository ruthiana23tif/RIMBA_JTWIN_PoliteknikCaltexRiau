import { AiFillDelete } from "react-icons/ai";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { bookingAPI } from "../services/bookingAPI";
import { useState, useEffect } from "react";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Form Booking Produk
        </h2>
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
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            disabled={loading}
            onChange={handleChange}
            placeholder="Alamat Email"
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              disabled={loading}
              onChange={handleChange}
              required
              className="w-1/2 p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              disabled={loading}
              onChange={handleChange}
              required
              className="w-1/2 p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
            />
          </div>

          <select
            name="product"
            value={formData.product}
            disabled={loading}
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
          >
            <option value="">Pilih produk</option>
            <option value="Snack Box A">Snack Box A</option>
            <option value="Snack Box B">Snack Box B</option>
            <option value="Snack Box C">Snack Box C</option>
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
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200"
          />

          <textarea
            name="notes"
            value={formData.notes}
            disabled={loading}
            onChange={handleChange}
            placeholder="Catatan tambahan (opsional)"
            rows="3"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-200 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
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
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4">{item.product}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4 max-w-xs truncate">
                    {item.notes}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={loading}
                      title="Hapus Booking"
                    >
                      <AiFillDelete className="text-pink-300 text-2xl hover:text-pink-500 hover:scale-110 transition-transform duration-150" />
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

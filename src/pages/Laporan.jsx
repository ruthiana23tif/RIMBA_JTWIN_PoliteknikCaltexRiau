import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import LaporanHeader from "../components/LaporanHeader";

const API_URL = "https://hjnhfrbavxuywcuffpev.supabase.co/rest/v1/tiger_locations";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbmhmcmJhdnh1eXdjdWZmcGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMDcwNzYsImV4cCI6MjA3NTY4MzA3Nn0.uJCf-xy7WUy6daHZEP1ddsLUl81M4AXdlu6z-vTbUmY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

// === Hitung jarak antar koordinat ===
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const villages = [
  { name: "Desa Air Hitam", lat: -0.25, lng: 102.45 },
  { name: "Desa Lubuk Kembang Bunga", lat: -0.232, lng: 102.39 },
  { name: "Desa Segati", lat: -0.28, lng: 102.38 },
];

const Laporan = () => {
  const [reports, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers,
          params: { select: "*" },
        });
        const data = response.data.map((tiger) => {
          const nearest = Math.min(
            ...villages.map((v) =>
              getDistance(tiger.latitude, tiger.longitude, v.lat, v.lng)
            )
          );
          const zone = nearest <= 1000 ? "Dekat Pemukiman" : "Zona Aman";
          const status =
            zone === "Dekat Pemukiman"
              ? ["Belum Ditindaklanjuti", "Proses"][
                  Math.floor(Math.random() * 2)
                ]
              : "Selesai";
          return { ...tiger, zone, status, distance: nearest };
        });

        // Urutkan data terbaru (timestamp paling baru di atas)
        const sortedData = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setReports(sortedData);
      } catch (err) {
        console.error("Gagal ambil data laporan:", err);
      }
    };
    fetchReports();
  }, []);

  // === Statistik ===
  const total = reports.length;
  const dekat = reports.filter((r) => r.zone === "Dekat Pemukiman").length;
  const aman = reports.filter((r) => r.zone === "Zona Aman").length;
  const tindak = reports.filter(
    (r) => r.status !== "Belum Ditindaklanjuti"
  ).length;

  // === Fungsi Print ===
  const handlePrint = () => {
    window.print();
  };

  // === Fungsi Export CSV ===
  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Tanggal & Waktu,Nama Harimau,Zona,Status,Keterangan"]
        .concat(
          reports.map(
            (r) =>
              `${new Date(r.timestamp).toLocaleString("id-ID")},${r.name},${
                r.zone
              },${r.status},${
                r.zone === "Dekat Pemukiman"
                  ? "Terdeteksi dekat area warga"
                  : "Aman di wilayah hutan"
              }`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "laporan_monitoring_harimau.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // === Pagination Logic ===
  const totalPages = Math.ceil(reports.length / rowsPerPage);
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentReports = reports.slice(indexOfFirst, indexOfLast);

  const startRecord = indexOfFirst + 1;
  const endRecord = Math.min(indexOfLast, total);

  return (
    <div className="bg-[#f2f1ea] min-h-screen text-gray-800">
      <Navbar />

      <div className="pt-24 px-12 space-y-8">
        {/* HEADER */}
        <LaporanHeader onPrint={handlePrint} onExportCSV={handleExportCSV} />

        {/* STATISTIK */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-600 text-sm">Total Laporan (Bulan Ini)</h3>
            <p className="text-3xl font-bold text-green-800 mt-2">{total}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-600 text-sm">Dekat Pemukiman</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">{dekat}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-600 text-sm">Zona Aman</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">{aman}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <h3 className="text-gray-600 text-sm">Sudah Ditindaklanjuti</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">{tindak}</p>
          </div>
        </div>

        {/* FILTER */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex items-center gap-4">
            <input type="date" className="border px-3 py-1 rounded-md" />
            <input type="date" className="border px-3 py-1 rounded-md" />
            <select className="border px-3 py-1 rounded-md">
              <option>Semua</option>
              <option>Dekat Pemukiman</option>
              <option>Zona Aman</option>
            </select>
            <select className="border px-3 py-1 rounded-md">
              <option>Status</option>
              <option>Belum Ditindaklanjuti</option>
              <option>Proses</option>
              <option>Selesai</option>
            </select>
            <button className="bg-green-700 text-white px-4 py-1 rounded-md">
              Terapkan
            </button>
            <button className="border px-3 py-1 rounded-md">Reset</button>
          </div>
        </div>

        {/* TABEL */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2 px-3 text-left">Tanggal & Waktu</th>
                <th className="py-2 px-3 text-left">Nama Harimau</th>
                <th className="py-2 px-3 text-left">Zona</th>
                <th className="py-2 px-3 text-left">Status</th>
                <th className="py-2 px-3 text-left">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {currentReports.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-3">
                    {new Date(r.timestamp).toLocaleString("id-ID")}
                  </td>
                  <td className="py-2 px-3">{r.name}</td>
                  <td className="py-2 px-3">{r.zone}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs ${
                        r.status === "Belum Ditindaklanjuti"
                          ? "bg-red-500"
                          : r.status === "Proses"
                          ? "bg-yellow-500"
                          : "bg-green-600"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="py-2 px-3">
                    {r.zone === "Dekat Pemukiman"
                      ? "Terdeteksi dekat area warga"
                      : "Aman di wilayah hutan"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
            <span>
              Showing {startRecord} to {endRecord} of {total} records
            </span>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-green-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laporan;

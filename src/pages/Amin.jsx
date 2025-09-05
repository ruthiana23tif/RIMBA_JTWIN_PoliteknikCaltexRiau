import React, { useState } from "react";
import "./LaporanPage.css";

import { Download, Printer, Filter, RotateCcw } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Amin() {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    type: "all",
    status: "all",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ from: "", to: "", type: "all", status: "all" });
  };

  // Data chart
  const trendData = [
    { minggu: "M1", aman: 6, ancaman: 3 },
    { minggu: "M2", aman: 5, ancaman: 5 },
    { minggu: "M3", aman: 8, ancaman: 3 },
    { minggu: "M4", aman: 4, ancaman: 4 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Laporan Deteksi</h1>
          <p className="text-gray-600">
            Riwayat deteksi harimau & status keamanan wilayah Anda.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            <Download size={16} /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <Printer size={16} /> Print / PDF
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <SummaryCard title="Total Laporan (Bulan Ini)" value="25" pill="Semua" />
        <SummaryCard title="Dekat Pemukiman" value="7" pill="Ancaman" pillColor="bg-red-600" />
        <SummaryCard title="Zona Aman" value="15" pill="Aman" pillColor="bg-green-600" />
        <SummaryCard title="Sudah Ditindaklanjuti" value="18" pill="Tindak Lanjut" pillColor="bg-yellow-500" />
      </section>

      {/* Filters */}
      <section className="bg-white rounded-xl shadow p-4 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Filter size={18} /> Filter Laporan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-gray-600">Dari Tanggal</label>
            <input
              type="date"
              id="from"
              value={filters.from}
              onChange={handleChange}
              className="w-full border rounded-lg px-2 py-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Sampai</label>
            <input
              type="date"
              id="to"
              value={filters.to}
              onChange={handleChange}
              className="w-full border rounded-lg px-2 py-1"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Jenis Laporan</label>
            <select
              id="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full border rounded-lg px-2 py-1"
            >
              <option value="all">Semua</option>
              <option value="near">Dekat Pemukiman</option>
              <option value="safe">Zona Aman</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select
              id="status"
              value={filters.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-2 py-1"
            >
              <option value="all">Semua</option>
              <option value="open">Belum Ditindaklanjuti</option>
              <option value="process">Proses</option>
              <option value="done">Selesai</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Terapkan
          </button>
          <button
            onClick={resetFilters}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </section>

      {/* Table */}
      <section className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Tanggal & Waktu</th>
              <th className="p-3">Lokasi</th>
              <th className="p-3">Jenis</th>
              <th className="p-3">Status</th>
              <th className="p-3">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <ReportRow
              date="2025-09-05 14:32"
              lokasi="Desa A (-0.123, 101.456)"
              jenis="Dekat Pemukiman"
              status="Belum Ditindaklanjuti"
              statusColor="bg-red-600"
              keterangan="Terlihat 200 m dari ladang."
            />
            <ReportRow
              date="2025-09-03 09:15"
              lokasi="Desa B (-0.333, 101.678)"
              jenis="Zona Aman"
              status="Selesai"
              statusColor="bg-green-600"
              keterangan="Lewat jalur biasa."
            />
            <ReportRow
              date="2025-09-01 18:40"
              lokasi="Desa C (-0.222, 101.123)"
              jenis="Dekat Pemukiman"
              status="Proses"
              statusColor="bg-yellow-500"
              keterangan="Butuh investigasi lebih lanjut."
            />
            <ReportRow
              date="2025-08-29 07:05"
              lokasi="Desa D (-0.456, 101.789)"
              jenis="Zona Aman"
              status="Selesai"
              statusColor="bg-green-600"
              keterangan="Bergerak menuju hutan."
            />
          </tbody>
        </table>
      </section>

      {/* Visuals */}
{/* Visuals */}
<section className="panel">
  <h3>Tren Laporan (6 Bulan Terakhir)</h3>
  <table className="trend-table w-full text-sm border-collapse">
    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 text-left">Bulan</th>
        <th className="p-2 text-center">Zona Aman</th>
        <th className="p-2 text-center">Dekat Pemukiman</th>
        <th className="p-2 text-center">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b">
        <td className="p-2">April</td>
        <td className="p-2 text-center">15</td>
        <td className="p-2 text-center">6</td>
        <td className="p-2 text-center">21</td>
      </tr>
      <tr className="border-b">
        <td className="p-2">Mei</td>
        <td className="p-2 text-center">12</td>
        <td className="p-2 text-center">4</td>
        <td className="p-2 text-center">16</td>
      </tr>
      <tr className="border-b">
        <td className="p-2">Juni</td>
        <td className="p-2 text-center">18</td>
        <td className="p-2 text-center">5</td>
        <td className="p-2 text-center">23</td>
      </tr>
      <tr className="border-b">
        <td className="p-2">Juli</td>
        <td className="p-2 text-center">10</td>
        <td className="p-2 text-center">7</td>
        <td className="p-2 text-center">17</td>
      </tr>
      <tr className="border-b">
        <td className="p-2">Agustus</td>
        <td className="p-2 text-center">14</td>
        <td className="p-2 text-center">3</td>
        <td className="p-2 text-center">17</td>
      </tr>
      <tr>
        <td className="p-2">September</td>
        <td className="p-2 text-center">16</td>
        <td className="p-2 text-center">4</td>
        <td className="p-2 text-center">20</td>
      </tr>
    </tbody>
  </table>
</section>



    </div>
  );
}

/* Sub Components */
function SummaryCard({ title, value, pill, pillColor = "bg-gray-500" }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
      <div className="text-gray-600 text-sm">{title}</div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">{value}</span>
        <span className={`px-2 py-1 text-xs text-white rounded-full ${pillColor}`}>
          {pill}
        </span>
      </div>
    </div>
  );
}

function ReportRow({ date, lokasi, jenis, status, statusColor, keterangan }) {
  return (
    <tr className="border-b">
      <td className="p-3">{date}</td>
      <td className="p-3">{lokasi}</td>
      <td className="p-3">{jenis}</td>
      <td className="p-3">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs text-white ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="p-3">{keterangan}</td>
    </tr>
  );
}

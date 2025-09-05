import React, { useState } from "react";
import { Pencil, Trash2, Save } from "lucide-react";

export default function AdminReport() {
  const [reports, setReports] = useState([
    {
      id: 1,
      date: "2025-09-05 14:32",
      location: "Desa A (-0.123, 101.456)",
      type: "Dekat Pemukiman",
      status: "Belum Ditindaklanjuti",
      note: "Terlihat 200 m dari ladang.",
      editing: false,
    },
    {
      id: 2,
      date: "2025-09-03 09:15",
      location: "Desa B (-0.333, 101.678)",
      type: "Zona Aman",
      status: "Selesai",
      note: "Lewat jalur biasa.",
      editing: false,
    },
  ]);

  // Ubah status laporan
  const handleStatusChange = (id, newStatus) => {
    setReports(
      reports.map((r) =>
        r.id === id ? { ...r, status: newStatus } : r
      )
    );
  };

  // Ubah keterangan
  const handleNoteChange = (id, newNote) => {
    setReports(
      reports.map((r) =>
        r.id === id ? { ...r, note: newNote } : r
      )
    );
  };

  // Toggle edit mode
  const toggleEdit = (id) => {
    setReports(
      reports.map((r) =>
        r.id === id ? { ...r, editing: !r.editing } : r
      )
    );
  };

  // Hapus laporan
  const deleteReport = (id) => {
    setReports(reports.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-xl font-semibold text-green-900 mb-4">
        Kelola Laporan Deteksi Harimau
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-50 text-green-900">
            <th className="p-2 border">Tanggal & Waktu</th>
            <th className="p-2 border">Lokasi</th>
            <th className="p-2 border">Jenis</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Keterangan</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.id} className="hover:bg-gray-50">
              <td className="p-2 border">{r.date}</td>
              <td className="p-2 border">{r.location}</td>
              <td className="p-2 border">{r.type}</td>
              <td className="p-2 border">
                <select
                  value={r.status}
                  onChange={(e) =>
                    handleStatusChange(r.id, e.target.value)
                  }
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option>Belum Ditindaklanjuti</option>
                  <option>Proses</option>
                  <option>Selesai</option>
                </select>
              </td>
              <td className="p-2 border">
                {r.editing ? (
                  <input
                    type="text"
                    value={r.note}
                    onChange={(e) =>
                      handleNoteChange(r.id, e.target.value)
                    }
                    className="w-full border rounded px-2 py-1 text-sm"
                  />
                ) : (
                  r.note
                )}
              </td>
              <td className="p-2 border flex gap-2">
                {r.editing ? (
                  <button
                    onClick={() => toggleEdit(r.id)}
                    className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    <Save size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => toggleEdit(r.id)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    <Pencil size={16} />
                  </button>
                )}
                <button
                  onClick={() => deleteReport(r.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

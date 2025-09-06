// AdminReports.jsx
import React, { useState } from "react";
import Layout from "./Layout";
import { Pencil, Save, Trash2 } from "lucide-react";

export default function AdminReport() {
  const [reports, setReports] = useState([
    {
      id: 1,
      datetime: "2025-09-05 14:32",
      location: "Desa A (-0.123, 101.456)",
      type: "Dekat Pemukiman",
      status: "Belum Ditindaklanjuti",
      note: "Terlihat 200 m dari ladang.",
      editing: false,
    },
    {
      id: 2,
      datetime: "2025-09-03 09:15",
      location: "Desa B (-0.333, 101.678)",
      type: "Zona Aman",
      status: "Selesai",
      note: "Lewat jalur biasa.",
      editing: false,
    },
    {
      id: 3,
      datetime: "2025-09-01 18:40",
      location: "Desa C (-0.222, 101.123)",
      type: "Dekat Pemukiman",
      status: "Proses",
      note: "Butuh investigasi lebih lanjut.",
      editing: false,
    },
  ]);

  // helper untuk kasih warna status
  const getStatusStyle = (status) => {
    switch (status) {
      case "Belum Ditindaklanjuti":
        return { background: "#fee2e2", color: "#b91c1c", fontWeight: 600, padding: "4px 8px", borderRadius: 6 };
      case "Proses":
        return { background: "#fef3c7", color: "#b45309", fontWeight: 600, padding: "4px 8px", borderRadius: 6 };
      case "Selesai":
        return { background: "#dcfce7", color: "#166534", fontWeight: 600, padding: "4px 8px", borderRadius: 6 };
      default:
        return {};
    }
  };

  // fungsi ubah status
  const handleStatusChange = (id, newStatus) => {
    setReports(reports.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
  };

  // fungsi ubah note
  const handleNoteChange = (id, newNote) => {
    setReports(reports.map((r) => (r.id === id ? { ...r, note: newNote } : r)));
  };

  // toggle edit mode
  const toggleEdit = (id) => {
    setReports(reports.map((r) => (r.id === id ? { ...r, editing: !r.editing } : r)));
  };

  // hapus laporan
  const deleteReport = (id) => {
    setReports(reports.filter((r) => r.id !== id));
  };

  return (
    <Layout>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
          Kelola Laporan Harimau
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 20 }}>
          Edit, hapus, atau ubah status laporan deteksi harimau.
        </p>

        {/* Summary Cards */}
        <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 20 }}>
          <SummaryCard label="Total Laporan" value={reports.length} />
          <SummaryCard label="Dekat Pemukiman" value={reports.filter((r) => r.type === "Dekat Pemukiman").length} />
          <SummaryCard label="Zona Aman" value={reports.filter((r) => r.type === "Zona Aman").length} />
          <SummaryCard label="Selesai" value={reports.filter((r) => r.status === "Selesai").length} />
        </div>

        {/* Table */}
        <div className="table-card" style={{ background: "white", borderRadius: 10, padding: 12, border: "1px solid #eee" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "linear-gradient(90deg,#1B4332,#2D6A4F)", color: "white" }}>
                <th style={{ padding: 8, textAlign: "left" }}>Tanggal & Waktu</th>
                <th style={{ padding: 8, textAlign: "left" }}>Lokasi</th>
                <th style={{ padding: 8, textAlign: "left" }}>Jenis</th>
                <th style={{ padding: 8, textAlign: "left" }}>Status</th>
                <th style={{ padding: 8, textAlign: "left" }}>Keterangan</th>
                <th style={{ padding: 8, textAlign: "center" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r) => (
                <tr key={r.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: 8 }}>{r.datetime}</td>
                  <td style={{ padding: 8 }}>{r.location}</td>
                  <td style={{ padding: 8 }}>{r.type}</td>
                  <td style={{ padding: 8 }}>
                    <select
                      value={r.status}
                      onChange={(e) => handleStatusChange(r.id, e.target.value)}
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: 6,
                        padding: "4px 6px",
                        fontSize: 13,
                        ...getStatusStyle(r.status),
                      }}
                    >
                      <option>Belum Ditindaklanjuti</option>
                      <option>Proses</option>
                      <option>Selesai</option>
                    </select>
                  </td>
                  <td style={{ padding: 8 }}>
                    {r.editing ? (
                      <input
                        type="text"
                        value={r.note}
                        onChange={(e) => handleNoteChange(r.id, e.target.value)}
                        style={{ width: "100%", border: "1px solid #ccc", borderRadius: 6, padding: "4px 6px", fontSize: 13 }}
                      />
                    ) : (
                      r.note
                    )}
                  </td>
                  <td style={{ padding: 8, textAlign: "center" }}>
                    {r.editing ? (
                      <button
                        onClick={() => toggleEdit(r.id)}
                        style={{ background: "#2D6A4F", color: "white", border: "none", padding: "6px 10px", borderRadius: 6, cursor: "pointer", marginRight: 6 }}
                      >
                        <Save size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleEdit(r.id)}
                        style={{ background: "#E07A5F", color: "white", border: "none", padding: "6px 10px", borderRadius: 6, cursor: "pointer", marginRight: 6 }}
                      >
                        <Pencil size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteReport(r.id)}
                      style={{ background: "#ef4444", color: "white", border: "none", padding: "6px 10px", borderRadius: 6, cursor: "pointer" }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

// Sub Komponen Kartu
function SummaryCard({ label, value }) {
  return (
    <div className="card" style={{ background: "white", padding: 14, borderRadius: 10, border: "1px solid #eee", boxShadow: "0 4px 8px rgba(0,0,0,0.03)" }}>
      <div style={{ color: "var(--muted)", fontSize: 13 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 800, marginTop: 6 }}>{value}</div>
    </div>
  );
}

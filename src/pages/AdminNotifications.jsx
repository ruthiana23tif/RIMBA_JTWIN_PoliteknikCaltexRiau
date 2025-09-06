// AdminNotifications.jsx
import React from "react";
import Layout from "./Layout";

export default function AdminNotifications() {
  // dummy data
  const notifications = [
    {
      id: 1,
      time: "2025-09-06 08:30",
      message: "Peringatan dikirim ke Desa A (WA)",
      type: "alert",
    },
    {
      id: 2,
      time: "2025-09-05 21:15",
      message: "Notifikasi: Harimau melewati zona aman Desa B",
      type: "info",
    },
    {
      id: 3,
      time: "2025-09-05 18:40",
      message: "Gagal mengirim notifikasi ke Desa C",
      type: "error",
    },
  ];

  return (
    <Layout>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
          Log Notifikasi
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 20 }}>
          Riwayat pengiriman notifikasi ke masyarakat terkait deteksi harimau.
        </p>

        <div
          style={{
            background: "white",
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          {notifications.map((n) => (
            <div
              key={n.id}
              style={{
                padding: "12px 14px",
                marginBottom: 10,
                borderRadius: 10,
                background:
                  n.type === "alert"
                    ? "linear-gradient(90deg,#E07A5F22,#fff)"
                    : n.type === "info"
                    ? "linear-gradient(90deg,#95D5B222,#fff)"
                    : "linear-gradient(90deg,#ef444422,#fff)",
                borderLeft:
                  n.type === "alert"
                    ? "4px solid #E07A5F"
                    : n.type === "info"
                    ? "4px solid #2D6A4F"
                    : "4px solid #ef4444",
              }}
            >
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                {n.time}
              </div>
              <div style={{ fontWeight: 600 }}>{n.message}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

// AdminMap.jsx
import React from "react";
import Layout from "./Layout";

export default function AdminMap() {
  return (
    <Layout>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>
          Peta Monitoring Harimau
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 20 }}>
          Lihat lokasi deteksi harimau secara real-time melalui peta interaktif.
        </p>

        {/* Map Placeholder */}
        <div
          style={{
            height: "70vh",
            background: "linear-gradient(180deg,#95D5B2,#cfeee2)",
            borderRadius: 12,
            border: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 18 }}>
            Peta Interaktif (placeholder)
          </div>
          <div style={{ color: "var(--muted)", marginTop: 6 }}>
            Integrasikan Leaflet / Google Maps di sini
          </div>
        </div>
      </div>
    </Layout>
  );
}

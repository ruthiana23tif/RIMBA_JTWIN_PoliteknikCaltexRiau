// AdminProfile.jsx
import React from "react";
import Layout from "./Layout";

export default function AdminProfile() {
  const user = {
    name: "Pemerintah Kab. X",
    role: "Administrator",
    email: "admin@kabx.go.id",
    phone: "0800-123-456",
    address: "Jl. Merdeka No. 10, Kab. X, Sumatera",
    joined: "12 Januari 2024",
  };

  return (
    <Layout>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>
          Profil Akun
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>
          Informasi akun pemerintah yang terdaftar dalam sistem monitoring harimau.
        </p>

        {/* Kartu utama */}
        <div
          style={{
            background: "white",
            borderRadius: 16,
            padding: 24,
            border: "1px solid #eee",
            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* Bagian atas */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), #f7b38a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {user.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 20 }}>{user.name}</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>{user.role}</div>
              <div style={{ marginTop: 6, fontSize: 13, color: "var(--muted)" }}>
                Bergabung sejak {user.joined}
              </div>
            </div>
          </div>

          {/* Detail akun */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <InfoRow label="Email" value={user.email} />
            <InfoRow label="Telepon" value={user.phone} />
            <InfoRow label="Alamat" value={user.address} />
            <InfoRow label="Instansi" value="Dinas Kehutanan Kab. X" />
          </div>

          {/* Security */}
          <div
            style={{
              padding: 16,
              borderRadius: 12,
              background: "var(--beige)",
              border: "1px solid #ddd",
              marginBottom: 24,
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Keamanan Akun</div>
            <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 12 }}>
              Jaga keamanan akun Anda. Ganti password secara berkala untuk mencegah akses tidak sah.
            </p>
            <button
              style={{
                background: "var(--secondary)",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Ubah Password
            </button>
          </div>

          {/* Tombol aksi */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              style={{
                background: "var(--primary)",
                color: "white",
                padding: "10px 18px",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Edit Profil
            </button>
            <button
              style={{
                background: "#ef4444",
                color: "white",
                padding: "10px 18px",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* Sub-komponen untuk detail profil */
function InfoRow({ label, value }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: 13, color: "var(--muted)" }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}

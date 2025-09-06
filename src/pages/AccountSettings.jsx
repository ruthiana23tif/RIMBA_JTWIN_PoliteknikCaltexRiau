// src/pages/AdminProfile.jsx
import React from "react";

export default function AdminProfile() {
  const profile = {
    name: "Admin Pemerintah",
    email: "admin@kabupaten.go.id",
    phone: "0800-123-456",
    role: "Pemerintah Kab. X",
    joined: "01 Januari 2025",
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold text-green-900 mb-6">
        Profil Akun
      </h1>

      {/* Card Profil */}
      <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center text-white text-2xl font-bold">
          {profile.name.charAt(0)}
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">
            {profile.name}
          </h2>
          <p className="text-gray-600">{profile.role}</p>
          <p className="text-sm text-gray-500 mt-1">
            Bergabung sejak {profile.joined}
          </p>
        </div>
      </div>

      {/* Detail Info */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-6 space-y-4">
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          Informasi Akun
        </h3>
        <div className="grid grid-cols-2 gap-y-3">
          <p className="font-medium text-gray-700">Email:</p>
          <p className="text-gray-600">{profile.email}</p>

          <p className="font-medium text-gray-700">Nomor Telepon:</p>
          <p className="text-gray-600">{profile.phone}</p>

          <p className="font-medium text-gray-700">Peran:</p>
          <p className="text-gray-600">{profile.role}</p>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="flex gap-4 mt-6">
        <button
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
        >
          Edit Profil
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold transition"
        >
          Keluar
        </button>
      </div>
    </div>
  );
}

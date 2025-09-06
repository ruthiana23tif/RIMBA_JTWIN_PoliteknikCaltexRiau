import React from "react";
import { Home, Map, FileText, Bell, User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <div className="h-screen w-64 bg-green-800 text-white flex flex-col shadow-lg">
      {/* Logo / Header */}
      <div className="px-6 py-4 justify-center text-2xl font-bold border-b border-green-700">
            RIMBA 
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <Home size={18} /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <Map size={18} /> Peta Monitoring
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <FileText size={18} /> Laporan
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <Bell size={18} /> Notifikasi
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <User size={18} /> Profil
        </a>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-green-700 text-sm text-gray-300">
        © 2025 RIMBA
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import desaData from "../../backend/desa.json";

const API_URL = "https://hjnhfrbavxuywcuffpev.supabase.co/rest/v1/tiger_locations";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbmhmcmJhdnh1eXdjdWZmcGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMDcwNzYsImV4cCI6MjA3NTY4MzA3Nn0.uJCf-xy7WUy6daHZEP1ddsLUl81M4AXdlu6z-vTbUmY";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

const villages = desaData;

// Fungsi menghitung jarak antar koordinat (meter)
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

const PetaMonitoring = () => {
  const [tigers, setTigers] = useState([]);

  const TNTN_CENTER = { lat: -0.1905, lng: 102.3723 };

  // Daftar pemukiman warga sekitar TNTN
  const villages = [
    { name: "Desa Air Hitam", lat: -0.25, lng: 102.45 },
    { name: "Desa Lubuk Kembang Bunga", lat: -0.232, lng: 102.39 },
    { name: "Desa Segati", lat: -0.28, lng: 102.38 },
  ];

  useEffect(() => {
  const checkDistance = async () => {
    if (!tigers || tigers.length === 0) return;

    for (const tiger of tigers) {
      for (const village of villages) {
        const distance = getDistance(
          tiger.lat,
          tiger.lng,
          village.lat,
          village.lng
        );

        if (distance < 1) { // kalau kurang dari 1 km
          console.log(`⚠️ Harimau dekat ${village.name} (${distance.toFixed(2)} km)`);

          // kirim ke backend untuk kirim WA
          await fetch("http://localhost:4000/api/send-wa", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              number: "6285xxxxxxxxx", // ganti nomor WA penerima
              message: `⚠️ Harimau terdeteksi dekat ${village.name}! Jarak ${distance.toFixed(2)} km.`,
            }),
          });
        }
      }
    }
  };

  checkDistance();
}, [tigers]);


  // Ambil data awal dari Supabase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers,
          params: { select: "*" },
        });
        setTigers(response.data);
      } catch (err) {
        console.error("Gagal mengambil data harimau:", err);
      }
    };

    fetchData();
  }, []);

  // Simulasi gerakan harimau tiap 5 detik (bergerak acak)
  useEffect(() => {
    const interval = setInterval(() => {
      setTigers((prev) =>
        prev.map((tiger) => ({
          ...tiger,
          latitude: tiger.latitude + (Math.random() - 0.5) * 0.002,
          longitude: tiger.longitude + (Math.random() - 0.5) * 0.002,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

return (
  <div className="bg-[#f5f5f0] min-h-screen">
    {/* === NAVBAR (fixed di atas) === */}
    <div className="fixed top-0 left-0 w-full z-50 shadow-sm">
      <Navbar />
    </div>

    {/* === FILTER BAR (di bawah navbar) === */}
    <div className="mt-[70px] flex justify-center items-center gap-4 bg-[#e9e8de] py-4 shadow-sm border-b border-gray-200 z-40 relative">
      {/* Dropdown Region */}
      <div className="relative">
        <select
          className="appearance-none bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-300 pr-8 font-medium text-sm focus:outline-none hover:border-green-600 transition"
        >
          <option>By Region</option>
          <option>Riau</option>
          <option>Jambi</option>
          <option>Sumatera Barat</option>
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">▼</span>
      </div>

      {/* Search Bar */}
      <div className="relative w-[300px]">
        <input
          type="text"
          placeholder="Search city"
          className="w-full bg-white border border-gray-300 text-gray-700 placeholder-gray-400 px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-700 transition"
        />
        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    {/* === MAP SECTION === */}
    <div className="p-6">
      <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
        <MapContainer
          center={[TNTN_CENTER.lat, TNTN_CENTER.lng]}
          zoom={10}
          scrollWheelZoom={true}
          className="h-[600px] w-full z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          {/* Marker harimau */}
          {tigers.map((tiger) => {
            const nearestVillage = Math.min(
              ...villages.map((v) =>
                getDistance(tiger.latitude, tiger.longitude, v.lat, v.lng)
              )
            );
            const color = nearestVillage <= 1000 ? "red" : "green";
            return (
              <CircleMarker
                key={tiger.id}
                center={[tiger.latitude, tiger.longitude]}
                radius={8}
                color={color}
                fillColor={color}
                fillOpacity={0.7}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>{tiger.name}</strong>
                    <br />
                    Koordinat: {tiger.latitude?.toFixed(4)},{" "}
                    {tiger.longitude?.toFixed(4)}
                    <br />
                    Terakhir diperbarui:{" "}
                    {new Date(tiger.timestamp).toLocaleString("id-ID")}
                    <br />
                    Jarak ke pemukiman terdekat:{" "}
                    {(nearestVillage / 1000).toFixed(2)} km
                    <br />
                    Status:{" "}
                    <span
                      style={{
                        color: color === "red" ? "red" : "green",
                        fontWeight: "bold",
                      }}
                    >
                      {color === "red"
                        ? "Dekat dengan pemukiman 🚨"
                        : "Aman dari pemukiman ✅"}
                    </span>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}

          {/* Marker pemukiman */}
          {villages.map((v, i) => (
            <CircleMarker
              key={i}
              center={[v.lat, v.lng]}
              radius={6}
              color="blue"
              fillColor="blue"
              fillOpacity={0.5}
            >
              <Popup>
                <strong>{v.name}</strong>
                <br />
                Pemukiman Warga
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  </div>
);



};

export default PetaMonitoring;

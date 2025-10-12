import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
const desaData = JSON.parse(fs.readFileSync("desa.json", "utf-8"));

// Fungsi hitung jarak (Haversine Formula)
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Fungsi kirim pesan WA lewat Fonnte
async function kirimWA(nomor, pesan) {
  try {
    const res = await axios.post(
      "https://api.fonnte.com/send",
      { target: nomor, message: pesan },
      { headers: { Authorization: process.env.FONNTE_TOKEN } }
    );
    console.log(`✅ WA terkirim ke ${nomor}:`, res.data);
  } catch (err) {
    console.error("❌ Gagal kirim WA:", err.response?.data || err.message);
  }
}

// Fungsi utama
async function cekHarimau() {
  console.log("📡 Mengambil data harimau dari Supabase...");
  const { data: harimauList, error } = await supabase
    .from("tiger_locations")
    .select("name, latitude, longitude");

  if (error) throw error;

  for (const harimau of harimauList) {
    for (const desa of desaData) {
      const jarak = haversine(
        harimau.latitude,
        harimau.longitude,
        desa.lat,
        desa.lng
      );

      if (jarak < 1) {
        const jarakMeter = (jarak * 1000).toFixed(0); // konversi ke meter
        const pesan = `Halo ${desa.namaWarga},
Telah terdeteksi harimau (${harimau.name}) di sekitar pemukiman warga, wilayah ${desa.name} RT/RW 001/003, Kab. Siak dalam radius ${jarakMeter} meter.

Harap tetap waspada dan hindari aktivitas di luar rumah untuk sementara waktu.`;

        await kirimWA(desa.nomor, pesan);
        console.log(
          `🚨 ${harimau.name} dekat ${desa.name} (${jarak.toFixed(2)} km)`
        );
      } else {
        console.log(
          `✅ ${harimau.name} aman dari ${desa.name} (${jarak.toFixed(2)} km)`
        );
      }
    }
  }
}

cekHarimau()
  .then(() => console.log("✅ Pemeriksaan selesai"))
  .catch((err) => console.error("💥 Error:", err));

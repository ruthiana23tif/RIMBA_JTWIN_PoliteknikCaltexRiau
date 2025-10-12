// backend/sendWA.js
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

// API Fonnte
const FONNTE_API = "https://api.fonnte.com/send";
const FONNTE_KEY = "UVEqiBkTVMYR5RpoFFYs"


app.post("/api/send-wa", async (req, res) => {
  const { nama, nomor, jarak } = req.body;

  try {
    await axios.post(
      FONNTE_API,
      {
        target: nomor,
        message: `⚠️ Halo ${nama}! Harimau terdeteksi hanya ${jarak.toFixed(
          2
        )} km dari lokasi Anda! Mohon tetap waspada.`,
      },
      {
        headers: {
          Authorization: FONNTE_KEY,
        },
      }
    );

    res.json({ success: true, msg: "Pesan WA terkirim ✅" });
  } catch (error) {
    console.error("Gagal kirim WA:", error);
    res.status(500).json({ success: false, msg: "Gagal kirim WA ❌" });
  }
});

app.listen(4000, () => console.log("🚀 Server WA jalan di port 4000"));

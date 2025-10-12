import express from "express";
import cors from "cors";
import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";

const { Client, LocalAuth } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

// Inisialisasi client WhatsApp
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { headless: true },
});

client.on("qr", (qr) => {
  console.log("📱 Scan QR ini di WhatsApp Web:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp connected!");
});

client.on("disconnected", () => {
  console.log("❌ WhatsApp disconnected!");
});

client.initialize();

// Endpoint API
app.post("/api/send-wa", async (req, res) => {
  const { number, message } = req.body;

  if (!number || !message)
    return res.status(400).json({ success: false, msg: "Data tidak lengkap" });

  try {
    const chatId = number + "@c.us";
    await client.sendMessage(chatId, message);
    res.json({ success: true, msg: "Pesan WA terkirim ✅" });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server WA jalan di port ${PORT}`));

import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/makeup_products";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc"; // truncated for safety

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const makeupAPI = {
  async getAll() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        order: "created_at.asc",
      },
    });
    return response.data;
  },

  // Ambil satu produk berdasarkan ID (angka)
  async getProductById(id) {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        id: `eq.${id}`,     // filter berdasarkan id (angka)
        select: "*",
        limit: 1,           // opsional: membatasi hasil agar maksimal 1 item
      },
    });

    // Cegah error jika hasil kosong
    return Array.isArray(response.data) && response.data.length > 0
      ? response.data[0]
      : null;
  },
};

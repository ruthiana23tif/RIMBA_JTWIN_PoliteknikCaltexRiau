import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/makeup_products";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const makeupAPI = {
  // Ambil semua produk
  async fetchMakeup() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        order: "created_at.asc",
      },
    });

    return response.data;
  },

  // Ambil produk berdasarkan ID
  async getProductById(id) {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        id: `eq.${id}`,     // Supabase pakai filter format 'eq'
        select: "*",         // Bisa disesuaikan kalau cuma mau field tertentu
      },
    });

    return response.data; // ← akan berupa array
  },
};

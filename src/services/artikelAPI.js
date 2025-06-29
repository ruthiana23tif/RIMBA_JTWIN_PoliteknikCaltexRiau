import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/artikel";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc"; 

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const artikelAPI = {
  async fetchArtikel() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: "*",
        order: "date.desc",
      },
    });
    return response.data;
  },

  async fetchArtikelById(id) {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: "*",
        id: `eq.${id}`,
        limit: 1,
      },
    });
    return response.data[0]; // karena hasilnya array
  },
};


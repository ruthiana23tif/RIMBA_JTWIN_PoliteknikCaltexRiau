import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/media_gallery";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const mediaAPI = {
  async fetchMedia() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        order: "created_at.desc", // Supabase REST-style ordering
      },
    });
    return response.data;
  },

  async createMedia(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteMedia(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};

import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/skincare_products";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc"; 

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const skincareAPI = {
  async fetchAll() { 
    const response = await axios.get(API_URL, {
      headers,
      params: {
        order: "created_at.desc",
      },
    });
    return response.data;
  },
  fetchById(id) {
  return axios
    .get(`${API_URL}?id=eq.${id}`, {
      headers,
      params: {
        select: "*",
      },
    })
    .then((res) => res.data[0]) // ambil item pertama
    .catch((err) => {
      console.error("Fetch by ID error:", err);
      return null;
    });
},

};

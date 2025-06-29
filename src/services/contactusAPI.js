import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/contactus";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc"; 

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation"
};

export const contactusAPI = {
  async fetchContactus() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        order: "created_at.asc",
      },
    });
    return response.data;
  },

  async sendContactusMessage(data) {
    // Supabase expects array of objects for insert
    const response = await axios.post(API_URL, [data], { headers });
    return response.data;
  }
};

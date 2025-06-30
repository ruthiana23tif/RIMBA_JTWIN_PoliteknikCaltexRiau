import axios from "axios";

const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/login";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc"; // (keep private in .env ideally)

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const loginAPI = {
  async checkLogin(email, password) {
    try {
      const response = await axios.get(API_URL, {
        headers,
        params: {
          email: `eq.${email}`,
          password: `eq.${password}`,
          select: "*",
        },
      });

      if (response.data.length > 0) {
        return { success: true, user: response.data[0] };
      } else {
        return { success: false, message: "Email atau password salah." };
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
};

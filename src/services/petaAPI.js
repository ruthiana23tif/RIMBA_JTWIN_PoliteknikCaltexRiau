import axios from "axios";

const API_URL = "https://hjnhfrbavxuywcuffpev.supabase.co/rest/v1/tiger_locations";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbmhmcmJhdnh1eXdjdWZmcGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMDcwNzYsImV4cCI6MjA3NTY4MzA3Nn0.uJCf-xy7WUy6daHZEP1ddsLUl81M4AXdlu6z-vTbUmY"; 

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const petaAPI = {
  async fetchPeta() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: "*",
        order: "created_at.desc",
      },
    });
    return response.data;
  },
};



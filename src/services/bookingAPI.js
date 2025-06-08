const API_URL = "https://ibblbpjrmcaimtbilpeh.supabase.co/rest/v1/booking";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYmxicGpybWNhaW10YmlscGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDk5MzYsImV4cCI6MjA2NDQ4NTkzNn0.-EyUJV7-zntpQorquExKu7eEi69Jmy4NsMYqPBvXLtc";

export const bookingAPI = {
  async fetchBookings() {
    const res = await fetch(API_URL, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) throw new Error("Gagal fetch booking");
    return res.json();
  },

  async createBooking(data) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation"
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Gagal tambah booking");
    return res.json();
  },

  async deleteBooking(id) {
    const res = await fetch(`${API_URL}?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) throw new Error("Gagal hapus booking");
  },
};

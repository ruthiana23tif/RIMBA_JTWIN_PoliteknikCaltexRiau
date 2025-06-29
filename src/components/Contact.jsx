import { useState } from "react";
import { contactusAPI } from "../services/contactusAPI";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Sending data:", form);

    try {
      await contactusAPI.sendContactusMessage(form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("DETAIL ERROR:", err.response?.data || err.message);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-2">
        Want to talk to us?
      </h2>
      <p className="text-gray-700 mb-8">
        Talk to one of our skin care representatives
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border border-pink-300 focus:border-pink-500 rounded-lg shadow-sm focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-pink-300 focus:border-pink-500 rounded-lg shadow-sm focus:outline-none"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border border-pink-300 focus:border-pink-500 rounded-lg shadow-sm focus:outline-none"
          required
        ></textarea>
       <button
  type="submit"
  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-3xl shadow-xl shadow-pink-300 transition-transform transform hover:scale-105 active:scale-95 relative overflow-hidden disabled:opacity-50"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</button>

      </form>
    </section>
  );
}

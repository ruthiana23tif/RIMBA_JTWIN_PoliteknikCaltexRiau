import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";

export default function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setQuote(res.data.slip.advice);
      })
      .catch(() => {
        setQuote("You are beautiful just the way you are.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <Header />
      <div className="max-w-xl mx-auto mt-20 p-8 bg-white rounded-xl shadow-md text-center border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          🌿 Beauty Quote
        </h2>
        {loading ? (
          <p className="italic text-gray-400">Loading...</p>
        ) : (
          <blockquote className="italic text-lg text-gray-600">
            “{quote}”
          </blockquote>
        )}
      </div>
    </div>
  );
}

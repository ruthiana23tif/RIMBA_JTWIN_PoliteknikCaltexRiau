import { useEffect, useState } from "react";
import { faqAPI } from "../services/faqAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import Header from "../layouts/Header";

export default function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await faqAPI.fetchFAQs();
        setFaqs(result);
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat memuat FAQ.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (faqs.length === 0) return <EmptyState message="Belum ada pertanyaan yang tersedia." />;

  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center">Pertanyaan Umum (FAQ)</h1>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border p-4 rounded shadow-sm bg-white">
            <h2 className="font-semibold text-lg">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

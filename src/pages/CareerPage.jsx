import { useEffect, useState } from "react";
import { careerAPI } from "../services/careerAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import Header from "../layouts/Header";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await careerAPI.fetchJobs();
        setJobs(result);
      } catch (err) {
        setError(err.message || "Gagal memuat lowongan pekerjaan.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (jobs.length === 0) return <EmptyState message="Belum ada lowongan pekerjaan." />;

  return (
    <div className="p-6">
      <Header />
      <div className=" py-12 px-6 text-center">
      <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-300 shadow-sm">
        We&apos;re hiring!
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Be part of our mission
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        We're looking for passionate people to join us on our mission. We value flat hierarchies,
        clear communication, and full ownership and responsibility.
      </p>
    </div>
    
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h2 className="text-lg font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.location || "Lokasi tidak tersedia"}</p>
            <p className="text-sm text-gray-500 mt-2">{job.description || "-"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

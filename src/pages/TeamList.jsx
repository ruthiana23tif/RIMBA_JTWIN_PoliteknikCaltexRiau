import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teamAPI } from "../services/teamAPI";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";

export default function TeamList() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await teamAPI.fetchTeam();
        setTeam(result);
      } catch (err) {
        setError(err.message || "Gagal memuat data tim.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <AlertBox message={error} />;
  if (team.length === 0) return <EmptyState message="Belum ada anggota tim." />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-rose-600 mb-8">Our Team</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.id} className="bg-pink-50 p-5 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={member.photo}
              alt={member.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center text-pink-700">{member.name}</h2>
            <p className="text-sm text-center text-gray-500">{member.role}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

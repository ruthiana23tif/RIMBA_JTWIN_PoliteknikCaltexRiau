// src/pages/TeamList.jsx
import React from "react";
import { Link } from "react-router-dom";
import team from "../data/team.json";
import Header from "../layouts/Header";

export default function TeamList() {
  return (
    <>
        <Header/>
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

            <div className="text-center mt-4">
              <Link
                to={`/team/${member.id}`}
                className="inline-block bg-rose-500 text-white px-4 py-2 rounded-full text-sm hover:bg-rose-600"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

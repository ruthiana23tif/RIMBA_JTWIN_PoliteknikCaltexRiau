import React from "react";
import { useParams } from "react-router-dom";
import team from "../data/team.json";
import Header from "../layouts/Header";

export default function TeamMemberDetail() {
  const { id } = useParams();
  const member = team.find((item) => item.id === id);

  if (!member) {
    return <div className="p-6 text-red-500">Team member tidak ditemukan.</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto p-6">
        <img
          src={member.photo}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-center text-rose-600">
          {member.name}
        </h1>
        <p className="text-center text-sm text-gray-500 mb-2">{member.role}</p>
        <p className="text-gray-700 mt-4 text-center">{member.bio}</p>
      </div>
    </>
  );
}

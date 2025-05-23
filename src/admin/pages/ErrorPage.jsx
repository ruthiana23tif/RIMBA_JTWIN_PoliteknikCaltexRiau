import React from "react";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img src={image} alt={`Error ${code}`} className="w-60 md:w-80 mb-6" />
      <h1 className="text-5xl font-bold text-red-600 mb-4">Error {code}</h1>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
}

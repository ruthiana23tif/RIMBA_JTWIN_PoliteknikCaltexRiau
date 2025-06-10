// src/pages/AboutUs.jsx
import { useEffect, useState } from "react";
import aboutData from "../data/aboutus.json";
import Header from "../layouts/Header";

export default function AboutUs() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(aboutData);
  }, []);

  if (!content) return null;

  return (
    <>
   
      <div className="bg-white text-gray-800 font-sans">
        {/* Hero Section */}
        <div
          className="w-full bg-cover bg-center py-24 text-center"
          style={{
            backgroundImage: `url(${content.heroBackground})`,
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Middle Section */}
        <div className="py-16 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={content.sectionImage}
              alt="Glowshere Team"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="bg-pink-50 p-6 md:p-10 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-pink-600 mb-3">
              {content.sectionTitle}
            </h2>
            <p className="text-gray-700 mb-4">{content.sectionDescription}</p>
            <div>
              <h4 className="text-pink-500 font-medium mb-2">Our Hours</h4>
              <ul className="text-gray-600">
                {content.hours.map((item, index) => (
                  <li key={index}>
                    {item.day}: {item.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4 mt-4">
              {content.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-pink-600 hover:text-pink-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-pink-50 py-16 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">
              {content.bottomTitle}
            </h2>
            <p className="text-gray-700 mb-6">{content.bottomDescription}</p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full shadow">
              {content.bottomCTA}
            </button>
          </div>
          <div>
            <img
              src={content.bottomImage}
              alt="Skincare Glowshere"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

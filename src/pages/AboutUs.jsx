import { useEffect, useState } from "react";
import { aboutusAPI } from "../services/aboutusAPI";
import TeamList from "./TeamList";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function AboutUs() {
  const [content, setContent] = useState(null);

  const title = "About Glowshere";
  const subtitle = "Discover your true glow with our curated skincare and makeup.";

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await aboutusAPI.fetchAboutus();
        if (data && data.length > 0) {
          setContent(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch about us content:", error);
      }
    }
    fetchData();
  }, []);

  if (!content) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center py-24 text-center"
        style={{ backgroundImage: `url(${content.heroBackground})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">{subtitle}</p>
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
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">{content.sectionTitle}</h2>
          <p className="text-gray-700 mb-4">{content.sectionDescription}</p>
          <div>
            <h4 className="text-pink-500 font-medium mb-2">Our Hours</h4>
            <ul className="text-gray-600">
              {content.hours?.map((item, index) => (
                <li key={index}>
                  {item.day}: {item.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4 mt-4">
            {content.socials?.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                {social.icon === "instagram" && <FaInstagram className="text-2xl" />}
                {social.icon === "facebook" && <FaFacebookF className="text-2xl" />}
                {social.icon === "whatsapp" && <FaWhatsapp className="text-2xl" />}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-pink-50 py-16 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">{content.bottomTitle}</h2>
          <p className="text-gray-700 mb-6">{content.bottomDescription}</p>
        </div>
        <div>
          <img
            src={content.bottomImage}
            alt="Skincare Glowshere"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <TeamList />
    </div>
  );
}

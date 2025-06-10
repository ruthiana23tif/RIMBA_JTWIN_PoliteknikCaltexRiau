import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const [openExplore, setOpenExplore] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
    const [openCompany, setOpenCompany] = useState(false);
const [showBooking, setShowBooking] = useState(false);


  // Tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4"
    >
      {/* Logo */}
      <Logo width={160} />

      {/* Navigation Menu */}
      <div
        id="nav-container"
        className="flex items-center space-x-6 border-l pl-4 border-gray-300 text-sm text-gray-700 font-medium"
      >
        <span id="nav-link">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
        </span>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setOpenProducts(!openProducts)}
            className="flex items-center font-semibold text-[#000000] hover:underline"
          >
            Products
            <svg
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                openProducts ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openProducts && (
            <div className="absolute mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    to="/skincare"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenProducts(false)}
                  >
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link
                    to="/makeup"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenProducts(false)}
                  >
                    Make Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setOpenCompany(!openCompany)}
            className="flex items-center font-semibold text-[#000000] hover:underline"
          >
            Company Info
            <svg
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                openCompany ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openCompany && (
            <div className="absolute mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    to="/media"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenCompany(false)}
                  >
                    Katalog Media
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenCompany(false)}
                  >
                    Career Page
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <span id="nav-link">
          <Link to="/testimoni" className="hover:text-black transition">
            Testimoni
          </Link>
        </span>

        <span id="nav-link">
          <Link to="/team" className="hover:text-black transition">
            Team
          </Link>
        </span>
        <span id="nav-link">
          <Link to="/faq" className="hover:text-black transition">
            FAQ Page
          </Link>
        </span>
        <span id="nav-link">
          <Link to="/booking" className="hover:text-black transition">
            {" "}
            Booking
          </Link>
        </span>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            onClick={() => setOpenExplore(!openExplore)}
            className="flex items-center font-semibold text-[#000000] hover:underline"
          >
            Explore
            <svg
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                openExplore ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {openExplore && (
            <div className="absolute mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    to="/aboutus"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenExplore(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenExplore(false)}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/article"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setOpenExplore(false)}
                  >
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Icon Section */}
      <div className="flex items-center space-x-6 text-gray-800 text-lg">
        <FaSearch className="cursor-pointer hover:text-black" />
        <FaShoppingCart className="cursor-pointer hover:text-black" />
      </div>
    </div>
  );
}

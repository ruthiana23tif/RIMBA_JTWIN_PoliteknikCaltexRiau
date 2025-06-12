import { RiLoginCircleFill } from "react-icons/ri";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../components/Logo";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const productsRef = useRef();
  const companyRef = useRef();
  const exploreRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !productsRef.current?.contains(event.target) &&
        !companyRef.current?.contains(event.target) &&
        !exploreRef.current?.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-2">
        {/* Logo */}
        <Logo width={110} />

        {/* Navigation */}
        <nav className="flex items-center space-x-5 text-sm text-gray-700 font-medium">
          {/* Products Dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center hover:underline font-inter text-[20px]"
            >
              Products
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""
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
            {openDropdown === "products" && (
              <div className="absolute mt-1 w-40 bg-white rounded-md shadow z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/skincare"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100 font-inter text-[20px]"
                    >
                      Skincare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/makeup"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100 font-inter text-[20px]"
                    >
                      Make Up
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Explore Dropdown */}
          <div className="relative" ref={exploreRef}>
            <button
              onClick={() => toggleDropdown("explore")}
              className="flex items-center hover:underline font-inter text-[20px]">
              Explore
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === "explore" ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "explore" && (
              <div className="absolute mt-1 w-40 bg-white rounded-md shadow z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/aboutus"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/article"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100">
                      Artikel
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>



          {/* Static Links */}
          <Link
            to="/testimoni"
            className="hover:text-black font-inter text-[20px]">
            Testimoni
          </Link>
          <Link to="/faq" className="hover:text-black font-inter text-[20px]">
            FAQ Page
          </Link>
          {/* Company Info Dropdown */}
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center hover:underline font-inter text-[20px]"
            >
              Company Info
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === "company" ? "rotate-180" : ""
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
            {openDropdown === "company" && (
              <div className="absolute mt-1 w-40 bg-white rounded-md shadow z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/media"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100 font-inter text-[20px]">
                      Katalog Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-gray-100 font-inter text-[20px]">
                      Career Page
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-base">
          <a
            href="https://glowsphere-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black">
            <RiLoginCircleFill className="cursor-pointer text-[29px]" />
          </a>
          <FaSearch className="cursor-pointer hover:text-black text-[29px]" />
          <Link to="/booking" className="hover:text-black">
            <FaShoppingCart className="cursor-pointer text-[29px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}

import { RiLoginCircleFill } from "react-icons/ri";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../components/Logo";
import { FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";


export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const productsRef = useRef();
  const companyRef = useRef();
  const exploreRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !productsRef.current?.contains(e.target) &&
        !companyRef.current?.contains(e.target) &&
        !exploreRef.current?.contains(e.target)
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
    <header className="bg-gradient-to-b from-pink-50 to-white border-b border-pink-100 shadow-sm shadow-pink-100">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
        <Logo width={110} />

        <nav className="flex items-center space-x-5 text-sm text-pink-700 font-medium">
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center hover:text-pink-900"
            >
              Products
              <svg
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "products" && (
              <div className="absolute mt-1 w-40 bg-white rounded-md shadow z-50">
                <ul className="py-1 text-sm text-pink-700">
                  <li>
                    <Link to="/skincare" onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-pink-50">Skincare</Link>
                  </li>
                  <li>
                    <Link to="/makeup" onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 hover:bg-pink-50">Make Up</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative" ref={exploreRef}>
            <button onClick={() => toggleDropdown("explore")} className="flex items-center hover:text-pink-900">
              Explore
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === "explore" ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "explore" && (
              <div className="absolute mt-1 w-40 bg-white rounded-md shadow z-50">
                <ul className="py-1 text-sm text-pink-700">
                  <li><Link to="/aboutus" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-pink-50">About Us</Link></li>
                  <li><Link to="/contactus" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-pink-50">Contact Us</Link></li>
                  <li><Link to="/article" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-pink-50">Artikel</Link></li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/testimoni" className="hover:text-pink-900">Testimoni</Link>
          <Link to="/faq" className="hover:text-pink-900">FAQ</Link>

          <div className="relative" ref={companyRef}>
            <button onClick={() => toggleDropdown("company")} className="flex items-center hover:text-pink-900">
              Company Info
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === "company" ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === "company" && (
              <div className="absolute mt-1 w-40 bg-white rounded-md shadow z-50">
                <ul className="py-1 text-sm text-pink-700">
                  <li><Link to="/media" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-pink-50">Katalog Media</Link></li>
                  <li><Link to="/career" onClick={() => setOpenDropdown(null)} className="block px-4 py-2 hover:bg-pink-50">Career Page</Link></li>
                </ul>
              </div>
            )}
          </div>
        </nav>

       <div className="flex items-center space-x-4 text-pink-700 text-[29px]">
  <a
    href="https://glowsphere-app.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-900 transition-transform duration-300 hover:scale-110"
  >
    <FiUser />
  </a>
  <FiSearch className="cursor-pointer hover:text-pink-900 transition-transform duration-300 hover:scale-110" />
  <Link
    to="/booking"
    className="hover:text-pink-900 transition-transform duration-300 hover:scale-110"
  >
    <FiShoppingBag />
  </Link>
</div>

      </div>
    </header>
  );
}

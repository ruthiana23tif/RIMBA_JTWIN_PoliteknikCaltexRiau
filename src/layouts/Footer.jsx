import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-sm">
      <div className="py-10 bg-white text-gray-800 relative overflow-hidden">

        {/* Glow Animation Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>

        {/* Logo */}
<Link to="#" className="block">
  <Logo className="mx-auto mb-4 w-32 relative z-10 cursor-pointer" />
</Link>

        {/* Nav */}
        <nav className="flex justify-center flex-wrap gap-6 mb-4 font-semibold relative z-10">
          {/* <a href="#" className="hover:text-pink-500 transition">Home</a> */}
          <a href="booking" className="hover:text-pink-500 transition">Shop</a>
          <a href="media" className="hover:text-pink-500 transition">Gallery</a>
          <a href="aboutus" className="hover:text-pink-500 transition">About</a>
          <a href="contactus" className="hover:text-pink-500 transition">Contact</a>
        </nav>

        {/* Social */}
        <div className="flex justify-center gap-5 text-xl relative z-10">
          <a href="https://web.whatsapp.com/" className="hover:text-pink-500 hover:scale-110 transition duration-200">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/" className="hover:text-pink-500 hover:scale-110 transition duration-200">
            <FaInstagram />
          </a>
          <a href="https://x.com/" className="hover:text-pink-500 hover:scale-110 transition duration-200">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 text-gray-400 py-3">
        &copy; {new Date().getFullYear()} Glowsphere. All Rights Reserved ✨
      </div>
    </footer>
  );
}

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold mb-4 md:mb-0">GLOWSPHERE</h1>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-300">
            HOME
          </a>
          <a href="#" className="hover:text-gray-300">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-gray-300">
            ABOUT US
          </a>
          <a href="#" className="hover:text-gray-300">
            CONTACT US
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-gray-400">
            <FaWhatsapp />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}

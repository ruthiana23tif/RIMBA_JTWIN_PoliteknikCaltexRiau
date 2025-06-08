import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center p-4">
            {/* Logo */}
            <div id="logo" className="text-2xl font-bold tracking-wide">
                GLOWSPHERE
            </div>

      {/* Navigation Menu */}
      <div
        id="nav-container"
        className="flex items-center space-x-6 border-l pl-4 border-gray-300 text-sm text-gray-700 font-medium"
      >
        <span id="nav-link">
          <Link to="/" 
          className="hover:text-black transition">Home</Link>
        </span>
        <span id="nav-link">
          <Link to="/skincare" 
          className="hover:text-black transition">Skincare</Link>
        </span>
        <span id="nav-link">
          <Link to="/makeup" 
          className="hover:text-black transition">Make Up</Link>
        </span>
        <span id="nav-link">
          <Link to="/aboutus" 
          className="hover:text-black transition">About Us</Link>
        </span>
        <span id="nav-link">
          <Link to="/contactus" 
          className="hover:text-black transition">Contact Us</Link>
        </span>
        <span id="nav-link">
          <Link to="/testimoni" 
          className="hover:text-black transition">Testimoni</Link>
        </span>
        <span id="nav-link">
          <Link to="/article" 
          className="hover:text-black transition">Artikel</Link>
        </span>
        <span id="nav-link">
          <Link to="/quotecard" 
          className="hover:text-black transition">Quote</Link>
        </span>
        <span id="nav-link">
          <Link to="/team" 
          className="hover:text-black transition">Team</Link>
        </span>
        <span id="nav-link">
          <Link to="/media" 
          className="hover:text-black transition">Katalog Media</Link>
        </span>
        <span id="nav-link">
          <Link to="/career" 
          className="hover:text-black transition">Career Page</Link>
        </span>
         <span id="nav-link">
          <Link to="/faq" 
          className="hover:text-black transition">FAQ Page</Link>
        </span>
        <span id="nav-link">
          <Link to="/booking" 
          className="hover:text-black transition"> Booking</Link>
        </span>
      </div>
            {/* Icon Section */}
            <div className="flex items-center space-x-6 text-gray-800 text-lg">
                <FaSearch className="cursor-pointer hover:text-black" />
                <FaShoppingCart className="cursor-pointer hover:text-black" />
            </div>
        </div>

    );
}


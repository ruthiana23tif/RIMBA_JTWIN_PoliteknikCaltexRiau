import { FaShoppingCart } from "react-icons/fa";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center p-4">
            {/* Logo */}
            <div id="logo" className="text-2xl font-bold tracking-wide">
                GLOWSPHERE
            </div>

            {/* Navigation Menu */}
            <div id="nav-container" className="flex items-center space-x-6 border-l pl-4 border-gray-300 text-sm text-gray-700 font-medium">
                <span id="nav-link"><a href="#" className="hover:text-black transition">Home</a></span>
                <span id="nav-link"><a href="#" className="hover:text-black transition">Products</a></span>
                <span id="nav-link"><a href="#" className="hover:text-black transition">About Us</a></span>
                <span id="nav-link"><a href="#" className="hover:text-black transition">Contact Us</a></span>
                                <span id="nav-link"><a href="#" className="hover:text-black transition">Testimoni</a></span>

            </div>
            {/* Icon Section */}
            <div className="flex items-center space-x-6 text-gray-800 text-lg">
                <FaSearch className="cursor-pointer hover:text-black" />
                <FaShoppingCart className="cursor-pointer hover:text-black" />
            </div>
        </div>

    );
}


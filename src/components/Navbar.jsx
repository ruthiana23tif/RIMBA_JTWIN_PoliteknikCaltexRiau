import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-20 py-6 bg-[#0B6B0B] text-white z-10 shadow-md">
      {/* LOGO */}
      <Link to="/" className="font-bold text-lg tracking-wide hover:opacity-90">
        RIMBA
      </Link>

      {/* NAVIGATION MENU */}
      <ul className="flex gap-10 text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline transition-all duration-200"
            }
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/peta"
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline transition-all duration-200"
            }
          >
            PETA MONITORING
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/laporan"
            className={({ isActive }) =>
              isActive
                ? "underline font-semibold"
                : "hover:underline transition-all duration-200"
            }
          >
            LAPORAN
          </NavLink>
        </li>
      </ul>

      {/* USER MENU */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-90">
        <FaUserCircle size={20} />
        <span>Nada ▾</span>
      </div>
    </nav>
  );
};

export default Navbar;

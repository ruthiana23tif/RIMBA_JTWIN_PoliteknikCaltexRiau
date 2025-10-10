import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-20 py-6 text-white z-10">
      <h1 className="font-bold text-lg tracking-wide">RIMBA</h1>
      <ul className="flex gap-10 text-sm">
        <li className="hover:underline cursor-pointer">HOME</li>
        <li className="hover:underline cursor-pointer">PETA MONITORING</li>
        <li className="hover:underline cursor-pointer">LAPORAN</li>
      </ul>
      <div className="flex items-center gap-2">
        <FaUserCircle size={20} />
        <span>Nada ▾</span>
      </div>
    </nav>
  )
}

export default Navbar

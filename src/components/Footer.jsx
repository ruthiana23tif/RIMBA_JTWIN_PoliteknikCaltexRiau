import React from 'react'
import { FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-600 to-teal-700 text-white px-20 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Pantau Harimau & Lindungi Masyarakat</h3>
          <div className="flex gap-4 mb-4">
            <FaLinkedin size={22} />
            <FaInstagram size={22} />
            <FaYoutube size={22} />
          </div>
          <p className="flex items-center gap-2"><FaMapMarkerAlt />Jl. Umban Sari No.1, Rumbai, Pekanbaru, Riau 28265</p>
          <p className="flex items-center gap-2 mt-2"><FaPhoneAlt /> (0761) - 53393 / 0811 758 0101</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Informasi Tambahan</h4>
          <ul className="space-y-1 text-sm">
            <li>Cara Kerja Monitoring</li>
            <li>Kebijakan Privasi</li>
            <li>Hubungi Kami</li>
            <li>Kemitraan</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-10 text-sm opacity-80">© 2025 © RIMBA. Dikembangkan oleh JTWIN</p>
    </footer>
  )
}

export default Footer

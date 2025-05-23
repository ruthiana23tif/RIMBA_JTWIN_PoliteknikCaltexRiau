import { useState } from "react";
import eventsData from "./events.json";
import "./tailwind.css";

export default function EventListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedBrand: "",
    selectedLokasi: ""
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredEvents = eventsData.filter((event) => {
    const matchesSearch =
      event.namaEvent.toLowerCase().includes(_searchTerm) ||
      event.detailEvent.lokasi.toLowerCase().includes(_searchTerm)

    const matchesBrand = dataForm.selectedBrand
      ? event.penyelenggara.nama === dataForm.selectedBrand
      : true;

      const matchesLokasi = dataForm.selectedLokasi
      ? event.detailEvent.lokasi === dataForm.selectedLokasi
      : true;

    return matchesSearch && matchesBrand && matchesLokasi;
  });

  const allBrands = [...new Set(eventsData.map((event) => event.penyelenggara.nama))];
  const allLocations = [...new Set(eventsData.map((event) => event.detailEvent.lokasi))];
  
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📆 Daftar Event GlowSphere</h1>

      {/* Search */}
      <input
        type="text"
        name="searchTerm"
        value={dataForm.searchTerm}
        onChange={handleChange}
        placeholder="Cari nama event atau lokasi..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* Filter Brand */}
      <select
        name="selectedBrand"
        value={dataForm.selectedBrand}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">Semua Brand</option>
        {allBrands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {/* Filter Lokasi */}
      <select
        name="selectedLokasi"
        value={dataForm.selectedLokasi}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      >
        <option value="">Semua Lokasi</option>
        {allLocations.map((lokasi, index) => (
          <option key={index} value={lokasi}>
            {lokasi}
          </option>
        ))}
      </select>


      {/* Grid Event */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden p-5 hover:shadow-lg transition-shadow"
          >
            <img
              src={item.gambar}
              alt={item.namaEvent}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-bold text-gray-900 mb-1">{item.namaEvent}</h2>
            <p className="text-sm text-gray-600 mb-1">
              📍 {item.detailEvent.lokasi}
            </p>
            <p className="text-sm text-gray-500">📅 {item.detailEvent.tanggal}</p>
            <p className="text-sm text-gray-500 mt-2">
              👤 <strong>{item.penyelenggara.nama}</strong>
            </p>
            <a
              href={item.pendaftaran.tautan}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm mt-1 block"
            >
              Link Pendaftaran
            </a>
            <p className="mt-2 text-sm font-semibold">
              💸 {item.pendaftaran.gratis ? "Gratis" : `Rp${item.pendaftaran.harga.toLocaleString()}`}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {item.tag.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-700 px-2 py-1 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

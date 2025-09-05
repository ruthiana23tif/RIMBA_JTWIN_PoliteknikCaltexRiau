// AdminMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ikon custom sederhana (warna sesuai status)
const iconBase = (color) =>
  new L.Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${color}`,
    iconSize: [30, 45],
    iconAnchor: [15, 42],
    popupAnchor: [1, -34],
  });

const iconSafe = iconBase("2D6A4F"); // hijau
const iconWarning = iconBase("E07A5F"); // oranye
const iconDanger = iconBase("FF0000"); // merah

export default function AdminMap() {
  // data dummy, bisa diambil dari API
  const detections = [
    {
      id: 1,
      type: "Dekat Pemukiman",
      status: "Belum Ditindaklanjuti",
      coords: [-0.123, 101.456],
      note: "Terlihat ~200 m dari ladang.",
    },
    {
      id: 2,
      type: "Zona Aman",
      status: "Selesai",
      coords: [-0.333, 101.678],
      note: "Lewat jalur biasa.",
    },
    {
      id: 3,
      type: "Dekat Pemukiman",
      status: "Proses",
      coords: [-0.222, 101.123],
      note: "Butuh investigasi.",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "12px",
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#1B4332" }}>
        Peta Monitoring Harimau
      </h2>
      <MapContainer
        center={[-0.2, 101.5]}
        zoom={8}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {detections.map((d) => (
          <Marker
            key={d.id}
            position={d.coords}
            icon={
              d.status === "Selesai"
                ? iconSafe
                : d.status === "Proses"
                ? iconWarning
                : iconDanger
            }
          >
            <Popup>
              <strong>{d.type}</strong> <br />
              Status: {d.status} <br />
              {d.note}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

import React from 'react';
import { FaPrint, FaFileCsv } from 'react-icons/fa';

const LaporanHeader = ({ onPrint, onExportCSV }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Laporan Monitoring Harimau</h2>
      <div className="flex gap-3">
        <button
          onClick={onPrint}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          <FaPrint /> Print
        </button>
        <button
          onClick={onExportCSV}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <FaFileCsv /> Export CSV
        </button>
      </div>
    </div>
  );
};

export default LaporanHeader;

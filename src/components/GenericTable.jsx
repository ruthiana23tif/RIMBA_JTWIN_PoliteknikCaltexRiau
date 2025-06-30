export default function GenericTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl border border-pink-200">
      <table className="min-w-full divide-y divide-pink-200">
        {/* Table Header */}
        <thead className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 text-white">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-semibold tracking-wider"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="bg-white divide-y divide-pink-100 text-sm text-gray-700">
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-pink-50 transition duration-200"
            >
              {renderRow(item, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

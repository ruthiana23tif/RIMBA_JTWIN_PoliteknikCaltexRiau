import { useEffect, useState } from "react";
import { pricingAPI } from "../services/pricingAPI";

const PER_PAGE = 3;

export default function PricingPage() {
  const [packages, setPackages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await pricingAPI.fetchPricing();
      setPackages(data);
      setLoading(false);
    };

    fetchPackages();
  }, []);

  const totalPages = Math.ceil(packages.length / PER_PAGE);
  const displayedPackages = packages.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="py-12 px-4 md:px-20 bg-gradient-to-b from-pink-50 via-white to-pink-50">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-pink-600 drop-shadow-sm">
        Pilih Paket Glow
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {displayedPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl shadow-lg p-6 bg-white border-2 transition-transform transform hover:scale-105 ${
              pkg.is_popular ? "border-pink-500" : "border-pink-200"
            }`}
          >
            {pkg.is_popular && (
              <div className="text-sm font-semibold text-pink-600 text-center mb-2">
                Paling Populer
              </div>
            )}

            {/* ✅ Gambar Paket */}
            {pkg.image && (
              <div className="bg-pink-50 rounded-xl p-2 mb-4 shadow-sm">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full max-h-52 object-contain mx-auto"
                />
              </div>
            )}

            {/* ✅ Nama Paket */}
            <h3 className="text-xl font-bold text-center mb-4 text-pink-700">
              {pkg.name}
            </h3>

            {/* ✅ Harga Paket */}
            <p className="text-center text-2xl font-semibold mb-6 text-pink-800">
              Rp {Number(pkg.price).toLocaleString()}{" "}
              <span className="text-sm font-normal text-pink-500">/ {pkg.period}</span>
            </p>

            {/* ✅ Tombol Pilih */}
            <button className="w-full py-2 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 active:scale-95 transition-transform">
              Pilih Paket
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl text-pink-600 border border-pink-300 bg-pink-50 hover:bg-pink-100 disabled:opacity-50"
          >
            &larr; Prev
          </button>

          <span className="text-sm text-pink-700">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl text-pink-600 border border-pink-300 bg-pink-50 hover:bg-pink-100 disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </section>
  );
}

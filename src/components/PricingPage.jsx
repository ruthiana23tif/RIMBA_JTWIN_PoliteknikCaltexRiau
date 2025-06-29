import { useEffect, useState } from "react";
import { pricingAPI } from "../services/pricingAPI";

export default function PricingPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await pricingAPI.fetchPricing();
      setPackages(data);
      setLoading(false);
    };

    fetchPackages();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="py-12 px-4 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Pilih Paket</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl shadow-lg p-6 bg-white border-2 ${
              pkg.is_popular ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {pkg.is_popular && (
              <div className="text-sm font-semibold text-blue-600 text-center mb-2">
                Paling Populer
              </div>
            )}
            <h3 className="text-xl font-bold text-center mb-4">{pkg.name}</h3>
            <p className="text-center text-2xl font-semibold mb-6">
              Rp {Number(pkg.price).toLocaleString()}{" "}
              <span className="text-sm font-normal">/ {pkg.period}</span>
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

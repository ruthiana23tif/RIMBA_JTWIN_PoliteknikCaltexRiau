import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import customerData from "../data/customers.json";

export default function Customers() {
  const [customers, setCustomers] = useState(customerData);

  const activeCustomers = customers.filter(
    (customer) => customer.loyalty === "Gold" || customer.loyalty === "Silver"
  );

  return (
    <div id="customers-container">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customer List"]} />

{/* Tombol Tambah Customer */}
<div className="px-5 pb-1">
  <Link
    to="/AddCustomer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-hijau text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    + Tambah Customer
  </Link>
</div>



      {/* Statistik Customers */}
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Total Customers</h2>
          <p className="text-4xl font-extrabold text-hijau">{customers.length}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Active Customers</h2>
          <p className="text-4xl font-extrabold text-blue-600">{activeCustomers.length}</p>
        </div>
      </div>

      {/* Tabel Customer */}
      <div className="px-5 pb-10">
          <div  className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer List</h2>
        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-xs uppercase tracking-wider text-gray-600">
                <th className="p-4 text-left">Customer ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Loyalty</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-green-50 transition-colors`}
                >
                  <td className="p-4 font-medium">{customer.id}</td>
                  <td className="p-4">{customer.name}</td>
                  <td className="p-4">{customer.email}</td>
                  <td className="p-4">{customer.phone}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        customer.loyalty === "Gold"
                          ? "bg-yellow-100 text-yellow-700"
                          : customer.loyalty === "Silver"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {customer.loyalty}
                    </span>
                  </td>
                  <td className="p-4 flex space-x-3">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
          </div>
    </div>
  );
}

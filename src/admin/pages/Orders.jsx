import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import orders from "../data/orders.json";

export default function Orders() {
  const ordersInProcess = orders.filter(
    (order) => order.status.toLowerCase() === "in process"
  );

  return (
    <div id="orders-container" className="pb-10">
      {/* Header Halaman */}
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Order List"]} />

      {/* Tombol Tambah Order */}
      <div className="px-5 pt-2 pb-4">
        <Link
          to="/AddOrder"
          className="inline-flex items-center gap-2 px-4 py-2 bg-hijau text-white rounded-lg shadow hover:shadow-md hover:scale-105 transition-transform"
        >
          + Tambah Order
        </Link>
      </div>

      {/* Statistik Orders */}
      <div className="px-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-1 text-gray-700">Total Orders</h2>
          <p className="text-4xl font-extrabold text-hijau">{orders.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-1 text-gray-700">Orders In Process</h2>
          <p className="text-4xl font-extrabold text-kuning">{ordersInProcess.length}</p>
        </div>
      </div>

      {/* Tabel Orders */}
      <div className="px-5 pt-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order List</h2>
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full text-sm text-gray-600">
              <thead>
                <tr className="bg-gray-100 text-xs uppercase tracking-wider text-gray-600">
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Customer Name</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Total Price</th>
                  <th className="p-4 text-left">Order Date</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={order.orderId}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-green-50 transition-colors`}
                  >
                    <td className="p-4 font-medium">{order.orderId}</td>
                    <td className="p-4">{order.customerName}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "In Process"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">${order.totalPrice.toFixed(2)}</td>
                    <td className="p-4">{order.orderDate}</td>
                    <td className="p-4 flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        View
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Cancel
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

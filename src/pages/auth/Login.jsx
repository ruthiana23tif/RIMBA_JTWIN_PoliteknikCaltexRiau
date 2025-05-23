import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im"; // Import spinner icon untuk loading

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  // Fungsi untuk menangani perubahan form input
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Fungsi untuk menangani submit form login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Menampilkan loading spinner
    setError(""); // Mengosongkan error jika ada

    try {
      // Mengirimkan request ke API untuk login
      const response = await axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email, // Memastikan parameter sesuai dengan yang diharapkan oleh API
        password: dataForm.password,
      });

      // Mengecek apakah login berhasil
      if (response.status === 200) {
        navigate("/"); // Jika login sukses, arahkan ke halaman dashboard
      } else {
        setError("Login failed! Please try again.");
      }
    } catch (err) {
      // Menangani error jika terjadi kesalahan dalam request
      setError(
        err.response ? err.response.data.message : "An error occurred"
      );
    } finally {
      setLoading(false); // Menyembunyikan loading spinner setelah selesai
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {/* Tampilkan error jika ada */}
      {error && (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
          <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
          {error}
        </div>
      )}

      {/* Tampilkan loading spinner jika sedang proses */}
      {loading && (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon Tunggu...
        </div>
      )}

      {/* Form Login */}
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="you@example.com"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
            placeholder="********"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Login
        </button>

        {/* Tautan untuk Forgot Password dan Register */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Forgot your password?{" "}
          <a href="/forgot" className="text-green-500 hover:underline">
            Reset Here
          </a>
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

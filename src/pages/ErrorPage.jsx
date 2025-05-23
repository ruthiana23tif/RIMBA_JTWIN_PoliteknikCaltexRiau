// src/components/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound({
  title = "Ooops...",
  subtitle = "Page Not Found",
  message = "Sorry, the content you're looking for doesn't exist. Either it was removed, or you mistyped the link.",
  buttonLabel = "Go Back",
  redirectTo = "/"
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-100 px-4">
      <div className="w-full max-w-5xl p-10 rounded-lg flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="text-left space-y-5">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-2xl font-semibold text-gray-600">{subtitle}</h2>
          <p className="text-gray-500 max-w-md">{message}</p>
          <Link
            to={redirectTo}
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            {buttonLabel}
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="/img/error.png"
            alt="404 Illustration"
            className="w-60 object-contain"
          />
          <p className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-[96px] font-bold text-purple-200 z-[-1]">
            404
          </p>
        </div>
      </div>
    </div>
  );
}

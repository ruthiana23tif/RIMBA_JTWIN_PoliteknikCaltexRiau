import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen flex flex-col">
      <Header />

      {/* Main content, biar dorong footer */}
      <main id="layout-wrapper" className="flex-1 p-4">
        <Outlet />
      </main>

      {/* Footer di luar main */}
      <Footer />
    </div>
  );
}

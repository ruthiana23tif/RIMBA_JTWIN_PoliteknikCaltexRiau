import { useState, Suspense } from "react";
import React from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
import Makeup from "./pages/makeup";
import Skincare from "./pages/skincare";
import BestSeller from "./pages/BestSeller";
import NotFound from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Forgot from "./pages/auth/forgot";
import Loading from "./components/Loading";
import Testimonials from "./pages/TestimonialsPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ArticleList from "./pages/ArticleList";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="skincare" element={<Skincare />} />
          <Route path="makeup" element={<Makeup />} />
          <Route path="bestseller" element={<BestSeller />} />
          <Route path="testimoni" element={<Testimonials />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="article" element={<ArticleList />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

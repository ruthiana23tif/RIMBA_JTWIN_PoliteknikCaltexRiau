import { useState, Suspense } from "react";
import React from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
import Makeup from "./pages/Makeup";
import Skincare from "./pages/Skincare";
import BestSeller from "./pages/BestSeller";
import NotFound from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Loading from "./components/Loading";
import Testimonials from "./pages/TestimonialsPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ArticleList from "./pages/ArticleList";
import QuoteCard from "./components/QuoteCard";
import TeamList from "./pages/TeamList";
import TeamMemberDetail from "./pages/TeamMemberDetail";
import ArticleDetail from "./pages/ArticleDetail";
import SkincareDetail from "./pages/SkincareDetail";
import MakeupDetail from "./pages/MakeupDetail";
import MediaGallery from "./pages/MediaGallery";
import CareerPage from "./pages/CareerPage";
import FaqPage from "./pages/FaqPage";
import Booking from "./pages/Booking";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="skincare" element={<Skincare />} />
          <Route path="makeup" element={<Makeup />} />
           <Route path="/media" element={<MediaGallery />} />
           <Route path="/career" element={<CareerPage />} />
           <Route path="/faq" element={<FaqPage />} />
           <Route path="/booking" element={<Booking />} />
          <Route path="bestseller" element={<BestSeller />} />
          <Route path="testimoni" element={<Testimonials />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="article" element={<ArticleList />} />
           <Route path="quotecard" element={<QuoteCard />} />
           <Route path="/team" element={<TeamList />} />
           <Route path="/team/:id" element={<TeamMemberDetail />} />
           <Route path="/articles/:slug" element={<ArticleDetail />} />
           <Route path="/skincare/:id" element={<SkincareDetail/>} />
            <Route path="/makeup/:id" element={<MakeupDetail />} />
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

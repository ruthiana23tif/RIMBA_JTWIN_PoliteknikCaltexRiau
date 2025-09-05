import { useState, Suspense } from "react";
import React from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Makeup = React.lazy(() => import("./pages/Makeup"));
const Skincare = React.lazy(() => import("./pages/Skincare"));
const BestSeller = React.lazy(() => import("./pages/BestSeller"));
const NotFound = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const Testimonials = React.lazy(() => import("./pages/TestimonialsPage"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));
const ArticleList = React.lazy(() => import("./pages/ArticleList"));
const QuoteCard = React.lazy(() => import("./components/QuoteCard"));
const TeamList = React.lazy(() => import("./pages/TeamList"));
const TeamMemberDetail = React.lazy(() => import("./pages/TeamMemberDetail"));
const ArticleDetail = React.lazy(() => import("./pages/ArticleDetail"));
const SkincareDetail = React.lazy(() => import("./pages/SkincareDetail"));
const MakeupDetail = React.lazy(() => import("./pages/MakeupDetail"));
const MediaGallery = React.lazy(() => import("./pages/MediaGallery"));
const CareerPage = React.lazy(() => import("./pages/CareerPage"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const Booking = React.lazy(() => import("./pages/Booking"));
const PricingPage = React.lazy(() => import("./components/PricingPage"));
const Simulasi = React.lazy(() => import("./pages/Simulasi"));
const Amin = React.lazy(() => import("./pages/Amin"));
function App() {
  const [count, setCount] = useState(0);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/makeup" element={<Makeup />} />
                    <Route path="/a1" element={<Amin />} />

          <Route path="/media" element={<MediaGallery />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/simulasi" element={<Simulasi />} />
          <Route path="/testimoni" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/article" element={<ArticleList />} />
          <Route path="/quotecard" element={<QuoteCard />} />
          <Route path="/team" element={<TeamList />} />
          <Route path="/team/:id" element={<TeamMemberDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/skincare/:id" element={<SkincareDetail />} />
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

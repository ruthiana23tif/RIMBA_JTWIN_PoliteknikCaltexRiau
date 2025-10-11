import { useState, Suspense } from "react";
import React from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import HomeRimba from "./pages/HomeRimba";
import PetaMonitoring from "./pages/PetaMonitoring";

const NotFound = React.lazy(() => import("./pages/ErrorPage"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
<Route index element={<HomeRimba />} />
<Route path="/peta" element={<PetaMonitoring />} />
          {/* <Route path="/homeRimba" element={<HomeRimba />} /> */}

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

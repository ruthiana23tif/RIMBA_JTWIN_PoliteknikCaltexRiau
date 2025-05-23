import { GiClover } from "react-icons/gi";
import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
import HeroSection from "./layouts/HeroSection";
import FeatureInfo from "./layouts/FeatureInfo";
import ShopByCategory from "./layouts/ShopByCategory";
import BestSeller from "./layouts/BestSeller";
import Promo from "./layouts/Promo";
import Testimoni from "./layouts/Testimoni";
import ContactUs from "./layouts/ContactUs";
import Footer from "./layouts/Footer";


createRoot(document.getElementById("root"))
    .render(
        <div id="layout-wrapper" className="flex flex-row flex-1">
            <div id="main-content" className="flex-1 p-4">
                <Header />
                <HeroSection/>
                <FeatureInfo/>
                <ShopByCategory/>
                <BestSeller/>
                <Promo/>
                <Testimoni/>
                <ContactUs/>
                <Footer/>
            </div>
        </div>
    )
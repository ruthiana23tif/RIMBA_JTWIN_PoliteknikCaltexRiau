import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import HeroSection from "../layouts/HeroSection";
import FeatureInfo from "../layouts/FeatureInfo";
import ShopByCategory from "../layouts/ShopByCategory";
import BestSeller from "../layouts/BestSeller";
import Promo from "../layouts/Promo";
import Testimoni from "../layouts/Testimoni";
import ContactUs from "../layouts/ContactUs";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <HeroSection />
            <FeatureInfo/>
            <ShopByCategory/>
            <BestSeller/>
            <Promo/>
            <Testimoni/>
            <ContactUs/>
            <Footer/>

        </div>
    );
}
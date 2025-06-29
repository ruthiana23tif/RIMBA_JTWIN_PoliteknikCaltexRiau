import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import HeroSection from "../layouts/HeroSection";
import FeatureInfo from "../layouts/FeatureInfo";
import ShopByCategory from "../layouts/ShopByCategory";
import BestSeller from "../layouts/BestSeller";
import Promo from "../layouts/Promo";
import Testimoni from "../layouts/Testimoni";
import ContactUs from "../layouts/ContactUs";
export default function Dashboard() {
    return (
        <div id="dashboard-container" className="bg-white">
            <HeroSection />
            <FeatureInfo/>
            <ShopByCategory/>
            <BestSeller/>
            <Promo/>
        </div>
    );
}
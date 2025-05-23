import { createRoot  } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import UserForm from "./UserForm";
import HitungGajiForm from "./HitungGajiForm";
import HitungGajiForm2 from "./HitungGajiForm2";
import ReviewForm from "./ReviewForm";



createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/> 
            <UserForm/>   
            <HitungGajiForm/>
            <HitungGajiForm2/>
            <ReviewForm/>
        </div>
    )
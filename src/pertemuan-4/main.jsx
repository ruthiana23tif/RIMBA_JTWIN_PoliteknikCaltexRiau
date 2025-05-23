import { createRoot } from "react-dom/client";
import './tailwind.css';
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList";
import ProductListSearchFilter from "./ProductListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";
import EventListSearchFilter from "./EventListSearchFilter";

createRoot(document.getElementById("root"))
    .render(
        <div>
            
            <EventListSearchFilter />
        </div>
    )
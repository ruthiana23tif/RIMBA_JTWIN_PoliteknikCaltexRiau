import { GiClover } from "react-icons/gi";
import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
import Sidebar2 from "./layouts/Sidebar2";
import MenuList from "./layouts/MenuList";


createRoot(document.getElementById("root"))
    .render(
        <div id="layout-wrapper" className="flex flex-row flex-1">
            {/* <Sidebar2/> */}
            <div id="main-content" className="flex-1 p-4">
                <Header />
                <Dashboard />
            </div>
        </div>
    )
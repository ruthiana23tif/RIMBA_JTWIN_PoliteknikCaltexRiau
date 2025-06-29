import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout(){
    return(
      
        <div id="app-container" className="bg-white-100 min-h-screen flex flex-col">
          <Header/>
        <div id="layout-wrapper" className="flex-1">
          <div id="main-content" className=" p-4">
            <Outlet/>
            <Footer/>
          </div>
        </div>
      </div>
    )
}
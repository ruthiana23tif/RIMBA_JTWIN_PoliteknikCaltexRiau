
import { AiOutlinePlus } from "react-icons/ai"; 
import MenuList from './MenuList';

export default function Sidebar2() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                        Sedap <b id="logo-dot" className="text-hijau">.</b>
                    </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-5">
            <ul id="menu-list" className="space-y-3">
                <MenuList/>
            </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white-text-sm">
                        <span className="flex-1 p-2">Please organize your menus through button below!</span>
                        <div id="add-menu-button" 
                        className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer" >
                            <span className="text-gray-600 flex items-center">
                                <AiOutlinePlus className="mr-3" />
                                Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
import { MdDashboard } from "react-icons/md";

export default function Dashboard() { // Parent Component
    return (
        <li>
            <DashboardMenu />
        </li>
    );
}

function DashboardMenu() { // Child Component
    return (
        <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <MdDashboard className="mr-4 text-xl" />
            Dashboard
        </div>
    );
}

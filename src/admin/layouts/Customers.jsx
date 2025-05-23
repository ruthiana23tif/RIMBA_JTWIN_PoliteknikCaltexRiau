import { BsPeopleFill } from "react-icons/bs";

export default function Customers() { // Parent Component
    return (
        <li>
            <CustomersMenu />
        </li>
    );
}

function CustomersMenu() { // Child Component
    return (
        <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <BsPeopleFill className="mr-4 text-xl" />
            Customers
        </div>
    );
}

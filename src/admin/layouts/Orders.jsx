import { BiCart } from "react-icons/bi";

export default function Orders() { // Parent Component
    return (
        <li>
            <OrdersMenu />
        </li>
    );
}

function OrdersMenu() { // Child Component
    return (
        <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <BiCart className="mr-4 text-xl" />
            Orders
        </div>
    );
}

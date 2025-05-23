import { BsPeopleFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

const menus = [
  {
    id: 1,
    name: "Dashboard",
    icon: <MdDashboard className="mr-4 text-xl" />,
  },
  {
    id: 2,
    name: "Orders",
    icon: <BiCart className="mr-4 text-xl" />,
  },
  {
    id: 3,
    name: "Customers",
    icon: <BsPeopleFill className="mr-4 text-xl" />,
  },
];

export default function MenuList() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        {menus.map((menu) => (
          <li key={menu.id}>
            <div
              id={`menu-${menu.id}`}
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              {menu.icon}
              {menu.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

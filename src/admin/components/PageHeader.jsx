import { useLocation } from "react-router-dom";

export default function PageHeader() {
  const location = useLocation();

  // Biar tulisan kelihatan rapi
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/customers":
        return "Customer List";
      case "/orders":
        return "Order List";
      case "/error400":
        return "Error 400";
      case "/error401":
        return "Error 401";
      case "/error403":
        return "Error 403";
      case "/AddCustomer":
        return "Add Customer";
        case "/AddOrder":
        return "Add Order";
      default:
        return "Page";
    }
  };

  return (
    <div
      id="pageheader-container"
      className="flex items-center justify-between p-4"
    >
      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold">
          {getTitle()}
        </span>
        <div
          id="breadcrumb-links"
          className="flex items-center font-medium space-x-2 mt-2"
        >
          <span id="breadcrumb-home" className="text-gray-500">
            Dashboard
          </span>
          {location.pathname !== "/" && (
            <>
              <span id="breadcrumb-separator" className="text-gray-500">
                /
              </span>
              <span id="breadcrumb-current" className="text-gray-500">
                {getTitle()}
              </span>
            </>
          )}
        </div>
      </div>
      <div id="action-button">
        <button
          id="add-button"
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Button
        </button>
      </div>
    </div>
  );
}

import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function CartPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden pb-2">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 px-2">
          <div
            className="
            flex
            flex-col
            flex-1
            bg-gray-100
            rounded-lg
            p-4
            shadow-sm
            overflow-y-auto
        "
          >
            <h1>Cart Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

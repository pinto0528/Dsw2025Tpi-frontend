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

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />

        {/* Content */}
        <div className="flex flex-col flex-1 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CartPage;

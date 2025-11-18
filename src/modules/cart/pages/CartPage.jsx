import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import { useState } from "react";

function CartPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div>
        <Header onMenuClick={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} />
        </div>
        CartPage
      </div>
    </div>
  );
}

export default CartPage;

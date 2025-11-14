import React, { useState } from "react"; // 1. Importar useState
import { Outlet } from "react-router-dom";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";

function AdminLayout() {
  // 2. Definir el estado para el sidebar (inicia cerrado en móvil)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 3. Función para cambiar (toggle) el estado
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

export default AdminLayout;

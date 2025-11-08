import React, { useState } from "react"; // 1. Importar useState
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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
        <div className="flex flex-col bg-gray-200 p-4 flex-1 overflow-auto md:ml-1.5 rounded-t-lg">
          <Outlet />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim vel totam, nihil quia esse adipisci unde blanditiis commodi consectetur optio id natus cupiditate! Voluptate dolorem libero voluptates sint recusandae labore.
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
import React from "react";
import { Outlet } from "react-router-dom"; 

function AdminLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div
        className="
          h-[5.5dvw] min-h-[70px]
          bg-gray-400 text-black p-4 text-md font-bold
          shadow-lg mb-1.5
          flex-shrink-0
        "
      >
        Header
      </div>

      {/* Contenedor principal: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className="
            flex flex-col w-[15dvw] min-w-[120px]
            bg-gray-300 p-4 text-black
            shadow-lg rounded-t-lg
            overflow-auto
          "
        >
          Sidebar
        </div>

        {/* Content */}
        <div className="flex flex-col bg-gray-200 p-4 flex-1 overflow-auto ml-1.5 rounded-t-lg">
          Content
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

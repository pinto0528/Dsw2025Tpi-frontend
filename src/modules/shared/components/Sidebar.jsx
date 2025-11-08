import React from "react";
import ButtonShared from "./ButtonShared";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  // Esta función determinará las clases
  const getLinkClassName = ({ isActive }) => {
    return `
      ${isActive ? 'bg-blue-300 text-blue-800 hover:bg-blue-200 font-bold pl-10 p-3' : ''}
    `;
  };

  return (
    <div
      className={`
        absolute md:relative
        flex-col
        ${isOpen ? "flex" : "hidden"}
        md:flex
        w-64 md:w-[15dvw] min-w-[120px]
        h-[calc(100vh-80px)] md:h-auto
        bg-gray-100 p-4 text-black
        shadow-lg rounded-t-lg
        overflow-auto
      `}
    >
      <div
        className="
          flex-1
          flex-col
          space-y-2 /* Añadido para espaciar los links */
        "
      >
        {/* 1. Usamos la función 'getLinkClassName' en la prop 'className'.
          2. Añadimos la prop 'end' al NavLink de "/admin".
        */}
        
        <NavLink
          to="/admin"
          end // <-- IMPORTANTE
          className={getLinkClassName}
        >
          Admin
        </NavLink>
        
        <NavLink
          to="/admin/products"
          className={getLinkClassName}
        >
          Products
        </NavLink>
        
        <NavLink
          to="/admin/categories"
          className={getLinkClassName}
        >
          Orders
        </NavLink>
      </div>

      <div>
        <ButtonShared>Cerrar Sesion</ButtonShared>
      </div>
    </div>
  );
};

export default Sidebar;
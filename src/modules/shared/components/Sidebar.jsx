import React from "react";
import ButtonShared from "./ButtonShared";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  // Esta función determinará las clases
  const getLinkClassName = ({ isActive }) => {
    return `
      ${isActive ? 'bg-blue-300 text-blue-800 hover:bg-blue-200 font-bold px-8 p-3' : ''}
    `;
  };

  return (
    <div
      className={`
        absolute md:relative
        flex-col
        ${isOpen ? "flex" : "hidden"}
        md:flex
        w-64 md:w-[15dvw] min-w-[180px]
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
          space-y-1
          items-center
        "
      >
        
        <NavLink
          to="/admin"
          end
          className={getLinkClassName}
        >
          Principal
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

        <hr className="
        my-5 
        mx-5
        border-none
        bg-gray-300
        h-0.5" />
      </div>

      <div className="md:hidden">
        <ButtonShared>Cerrar Sesion</ButtonShared>
      </div>
    </div>
  );
};

export default Sidebar;
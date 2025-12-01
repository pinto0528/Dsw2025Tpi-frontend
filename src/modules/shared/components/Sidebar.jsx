import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; 
import AuthButton from "./AuthButton";

const Sidebar = ({ isOpen }) => {
  const { isAdmin } = useAuth();

  const navLinks = [
    { to: "/main", label: "Principal", protected: false },
    { to: "/cart", label: "Carrito", protected: false },
    { to: "/account", label: "Cuenta", protected: false },
    
    { to: "/admin", label: "Dashboard", protected: true, end: true },
    { to: "/admin/products", label: "Productos", protected: true },
    { to: "/admin/orders", label: "Ordenes", protected: true },
  ];

  const getLinkClassName = ({ isActive }) => {
    const activeClasses =
      "bg-blue-300 text-blue-800 hover:bg-blue-200 font-bold px-8 p-3";
    return `${isActive ? activeClasses : ""}`;
  };

  return (
    <div
      className={`
        absolute lg:relative flex flex-col
        ${isOpen ? "flex" : "hidden"} lg:flex
        w-64 lg:w-[15dvw] min-w-[180px] h-[calc(100vh-85px)]
        bg-gray-100 p-4 text-black
        shadow-lg rounded-t-lg rounded-b-lg
        overflow-auto
      `}
    >
      <div className="flex-1 flex flex-col space-y-1">
        {navLinks
          .filter((link) => {
            if (isAdmin) {
              return link.protected === true;
            } else {
              return link.protected === false;
            }
          })
          .map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={getLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
          
        <hr className="w-full my-5 border-gray-300" />
      </div>

      <div className="md:hidden mt-auto">
        <AuthButton className="px-8" />
      </div>
      
      <div className="mt-2 text-sm text-gray-500 text-center">
        {isAdmin ? "Vista Administrador" : "Vista Cliente"}
      </div>
    </div>
  );
};

export default Sidebar;
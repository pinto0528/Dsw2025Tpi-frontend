import React from "react";
import ButtonShared from "./ButtonShared";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const isAdmin = true;

  const navLinks = [
    { to: "/", label: "Principal", protected: false },
    { to: "/admin", label: "Dashboard", protected: true, end: true },
    { to: "/admin/products", label: "Productos", protected: true },
    { to: "/admin/orders", label: "Ordenes", protected: true },
    { to: "/cart", label: "Carrito", protected: false },
    { to: "/account", label: "Cuenta", protected: false },
  ];

  const getLinkClassName = ({ isActive }) => {
    const activeClasses =
      "bg-blue-300 text-blue-800 hover:bg-blue-200 font-bold px-8 p-3";

    return `${isActive ? activeClasses : ""}`;
  };

  return (
    <div
      className={`
        absolute md:relative flex flex-col
        ${isOpen ? "flex" : "hidden"} md:flex
        w-64 md:w-[15dvw] min-w-[180px] h-full
        bg-gray-100 p-4 text-black
        shadow-lg rounded-t-lg rounded-b-lg
        overflow-auto
      `}
    >
      <div className="flex-1 flex flex-col space-y-1">
        {" "}
        {navLinks
          .filter((link) => !link.protected || isAdmin)
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
        <ButtonShared>Cerrar Sesion</ButtonShared>
      </div>
    </div>
  );
};

export default Sidebar;

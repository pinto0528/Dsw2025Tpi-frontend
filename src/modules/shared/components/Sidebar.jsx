import React from "react";
import ButtonShared from "./ButtonShared";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const getLinkClassName = ({ isActive }) => {
    return `${
      isActive
        ? "bg-blue-300 text-blue-800 hover:bg-blue-200 font-bold px-8 p-3"
        : ""
    }`;
  };

  const showNavLink = () => {
    const isAdmin = false; //localStorage.getItem("role") === "admin";
    return isAdmin;
  };

  return (
    <div
      className={`
        absolute md:relative
        flex-col
        ${isOpen ? "flex" : "hidden"}
        md:flex
        w-64 md:w-[15dvw] min-w-[180px]
        h-auto
        bg-gray-100 p-4 text-black
        shadow-lg rounded-t-lg rounded-b-lg
        overflow-auto
        mb-2
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
        {showNavLink() && (
          <div>
            <NavLink to="/admin" end className={getLinkClassName}>
              Principal
            </NavLink>
            <NavLink to="/admin/products" className={getLinkClassName}>
              Productos
            </NavLink>
            <NavLink to="/admin/orders" className={getLinkClassName}>
              Productos
            </NavLink>
            <hr className="my-5 mx-5 border-none bg-gray-300 h-0.5" />
          </div>
        )}

        <div>
          <NavLink to="/" className={getLinkClassName}>
            Principal
          </NavLink>
          <NavLink to="/cart" className={getLinkClassName}>
            Carrito
          </NavLink>
          <NavLink to="/products" className={getLinkClassName}>
            Cuenta
          </NavLink>
        </div>
      </div>

      <div className="md:hidden">
        <ButtonShared>Cerrar Sesion</ButtonShared>
      </div>
    </div>
  );
};

export default Sidebar;

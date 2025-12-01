import React from "react";
import { useNavigate } from "react-router-dom";
import MenuButton from "./MenuButton";
import ButtonShared from "./Atoms/ButtonShared";
import SearchBarShared from "./Atoms/SearchBarShared";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();

  
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div
      className="
        h-[70px] min-h-[70px]
        bg-gray-100 text-black p-3 text-md font-bold
        mb-2
      "
    >
      <div className="flex flex-row items-center w-full h-11 justify-between">
        <div className="block lg:hidden mr-4">
          <MenuButton onClick={onMenuClick} />
        </div>
        
        <h1 className="text-3xl">Header</h1>
        
        <div className="mx-5">
          <SearchBarShared />
        </div>

        {/* Lógica condicional del botón */}
        <div className="hidden lg:flex h-[36px]">
          {isLoggedIn ? (
            <ButtonShared className="px-8" onClick={handleLogout}>
              Cerrar Sesion
            </ButtonShared>
          ) : (
            <ButtonShared className="px-8" onClick={handleLogin}>
              Iniciar Sesion
            </ButtonShared>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
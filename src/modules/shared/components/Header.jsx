import React from "react";
import MenuButton from "./MenuButton";
import ButtonShared from "./ButtonShared";

// 1. Acepta 'onMenuClick' como prop
const Header = ({ onMenuClick }) => {
  return (
    <div
      className="
        h-[70px] min-h-[70px]
        bg-gray-100 text-black p-3 text-md font-bold
        mb-2
      "
    >
      <div className="flex">
        <div className="block md:hidden mr-4">
          <MenuButton onClick={onMenuClick} />
        </div>
        <h1 className="text-3xl mt-1">Header</h1>
        <div className="hidden md:flex md:ml-auto">
          <ButtonShared className="mr-3 px-8">Cerrar Sesion</ButtonShared>
        </div>
      </div>
    </div>
  );
};

export default Header;

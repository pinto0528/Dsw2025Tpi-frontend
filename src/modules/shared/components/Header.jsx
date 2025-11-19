import React from "react";
import MenuButton from "./MenuButton";
import ButtonShared from "./atoms/ButtonShared";
import SearchBarShared from "./Atoms/SearchBarShared";

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
      <div className="flex flex-row items-center w-full h-11 justify-between">
        <div className="block md:hidden mr-4">
          <MenuButton onClick={onMenuClick} />
        </div>
        <h1 className="text-3xl">Header</h1>
        <div className="mx-5">
          <SearchBarShared />
        </div>
        <div className="hidden md:flex h-[36px]">
          <ButtonShared className="px-8">Cerrar Sesion</ButtonShared>
        </div>
      </div>
    </div>
  );
};

export default Header;

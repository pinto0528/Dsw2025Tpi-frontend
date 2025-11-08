import React from "react";
import MenuButton from "./MenuButton";

// 1. Acepta 'onMenuClick' como prop
const Header = ({ onMenuClick }) => {
  return (
    <div
      className="
        h-[70px] min-h-[70px]
        bg-gray-400 text-black p-3 text-md font-bold
        shadow-lg mb-1.5
        flex-shrink-0
      "
    >
      <div className="flex">
        <div className="block md:hidden">
          <MenuButton onClick={onMenuClick} />
        </div>
        <h1 className="text-3xl mt-1">Header</h1>
      </div>
    </div>
  );
};

export default Header;
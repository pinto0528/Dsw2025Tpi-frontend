import React from 'react'; // Añadido import

// 1. Acepta 'onClick' como prop
const MenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      mr-2
      mt-0
      focus:outline-none
      bg-gray-200
      hover:bg-gray-300
      text-gray-800
      font-semibold
      text-sm
      p-2
      rounded
    "
  >
    Menu
  </button>
);

export default MenuButton;
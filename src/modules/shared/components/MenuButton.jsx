import React from 'react'; // Añadido import

// 1. Acepta 'onClick' como prop
const MenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
  >
    Menu
  </button>
);

export default MenuButton;
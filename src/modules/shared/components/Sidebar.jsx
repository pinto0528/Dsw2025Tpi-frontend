import React from 'react';

// 1. Acepta 'isOpen' como prop
const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`

        absolute md:relative
        w-64 md:w-[15dvw] min-w-[120px]
        h-[calc(100vh-80px)] md:h-auto

        flex-col
        bg-gray-300 p-4 text-black
        shadow-lg rounded-t-lg
        overflow-auto
        md:block 
        ${isOpen ? 'block' : 'hidden'} 
      `}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
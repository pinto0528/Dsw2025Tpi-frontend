import React from "react";
import ButtonShared from "./Atoms/ButtonShared";

const LogoutConfirm = ({ onConfirm, onCancel }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 min-w-[300px]">
      <h2 className="text-xl font-bold text-center">¿Cerrar Sesion?</h2>
      <p className="text-gray-600 text-center">
        ¿Esta seguro que desea salir?
      </p>
      
      <div className="flex flex-row justify-center gap-4 mt-2">
        {/* Botón de Cancelar (Gris) */}
        <ButtonShared 
            onClick={onCancel} 
            className="bg-gray-300 hover:bg-gray-400 text-black border-none"
        >
          Cancelar
        </ButtonShared>
        
        <ButtonShared onClick={onConfirm}>
          Sí, Salir
        </ButtonShared>
      </div>
    </div>
  );
};

export default LogoutConfirm;
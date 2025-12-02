import React, { useState, useEffect } from "react";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import InputShared from "../../shared/components/atoms/InputShared";

const SetAdminKey = () => {
  const [key, setKey] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const existingKey = localStorage.getItem("admin_creation_secret");
    if (existingKey) setKey(existingKey);
  }, []);

  const handleSave = () => {
    if (!key.trim()) {
        alert("Escribe una clave válida");
        return;
    }
    // GUARDAMOS EN LOCALSTORAGE
    localStorage.setItem("admin_creation_secret", key);
    
    setSavedMessage("¡Clave guardada! Ahora puedes cerrar sesión y registrar un admin.");
    setTimeout(() => setSavedMessage(""), 3000);
  };

  const handleClear = () => {
    localStorage.removeItem("admin_creation_secret");
    setKey("");
    setSavedMessage("Clave eliminada. Ya no se pueden crear admins en este PC.");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500 mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Seguridad: Creación de Admins</h2>
      <p className="text-sm text-gray-600 mb-4">
        Establece una contraseña temporal en este navegador. Quien se registre usando esta contraseña podrá ser Administrador.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <div className="w-full sm:w-1/2">
            <InputShared 
                label="Clave Maestra Temporal" 
                value={key} 
                onChange={(e) => setKey(e.target.value)} 
                type="text" 
                placeholder="Ej: Equipo2025"
            />
        </div>
        <div className="flex gap-2">
            <ButtonShared onClick={handleSave} className="h-[42px] mb-[2px]">
                Guardar
            </ButtonShared>
            <ButtonShared onClick={handleClear} className="bg-red-100 text-red-600 hover:bg-red-200 h-[42px] mb-[2px]">
                Borrar
            </ButtonShared>
        </div>
      </div>
      
      {savedMessage && (
          <p className="text-green-600 font-bold mt-2 animate-pulse">{savedMessage}</p>
      )}
    </div>
  );
};

export default SetAdminKey;
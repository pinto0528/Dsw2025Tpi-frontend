import React, { useState } from "react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import { useAuth } from "../../shared/hooks/useAuth";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";

const AccountPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col overflow-auto h-screen">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 pb-2 overflow-auto">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 px-2 overflow-auto">
          <div className="flex flex-col flex-1 overflow-auto">
            
           <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">Mi Cuenta</h1>
            </div>

            <div className="flex flex-col flex-1 bg-gray-100 rounded-lg p-6 shadow-sm overflow-y-auto gap-6">
              
              {user ? (
                <>
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 max-w-3xl">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      
                      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        {user.username?.charAt(0).toUpperCase()}
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-900">{user.username}</h2>
                        <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                          {user.role}
                        </span>
                      </div>
                    </div>

                    <hr className="my-6 border-gray-200" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">ID de Usuario</p>
                        <p className="text-gray-800 font-mono text-sm bg-gray-50 p-2 rounded mt-1 border border-gray-200 break-all">
                          {user.id}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 font-medium">Correo Electrónico</p>
                        <p className="text-gray-800 font-medium mt-1">
                            {user.email !== "No especificado" ? user.email : user.username}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 font-medium">Sesión Expira</p>
                        <p className="text-gray-800 mt-1">{user.expiration}</p>
                      </div>
                      
                      <div>
                         <p className="text-sm text-gray-500 font-medium">Estado</p>
                         <div className="flex items-center gap-2 mt-1">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="text-gray-800">Activo</span>
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end max-w-3xl">
                    <ButtonShared 
                        onClick={logout}
                        className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200"
                    >
                        Cerrar Sesión
                    </ButtonShared>
                  </div>
                </>
              ) : (
                <div className="text-center p-10 text-gray-500">
                  <p>No se encontró información del usuario. Por favor inicia sesión nuevamente.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
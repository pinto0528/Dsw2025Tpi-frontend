import React, { createContext, useContext, useState } from "react";

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);
  
  // 1. NUEVO: El estado de sesión vive aquí, no se pierde al navegar
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const openLoginModal = () => setActiveModal("login");
  const openLogoutModal = () => setActiveModal("logout");
  const closeModal = () => setActiveModal(null);

  return (
    <UiContext.Provider 
      value={{ 
        activeModal, 
        openLoginModal, 
        openLogoutModal, 
        closeModal,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUi = () => useContext(UiContext);
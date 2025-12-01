import React from "react";
import ButtonShared from "./Atoms/ButtonShared";
import { useUi } from "../../shared/context/UiContext";

const AuthButton = ({ className }) => {
  const { isLoggedIn, openLoginModal, openLogoutModal } = useUi();

  if (isLoggedIn) {
    return (
      <ButtonShared className={className} onClick={openLogoutModal}>
        Cerrar Sesión
      </ButtonShared>
    );
  }

  return (
    <ButtonShared className={className} onClick={openLoginModal}>
      Iniciar Sesión
    </ButtonShared>
  );
};

export default AuthButton;
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuButton from "./MenuButton";
import SearchBarShared from "./Atoms/SearchBarShared";
import Modal from "./atoms/Modal";
import LoginForm from "../../auth/components/LoginForm";
import LogoutConfirm from "./LogoutConfirm";
import AuthButton from "./AuthButton"; 
import { useUi } from "../../shared/context/UiContext";
import ButtonShared from "./Atoms/ButtonShared";


import { useAuth } from "../../shared/hooks/useAuth"; 
import { useCart } from "../../../context/CartContext";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  
  const { 
    activeModal, 
    closeModal, 
    setIsLoggedIn,
    isLoggedIn 
  } = useUi();
  const {cart} = useCart();
  const { isAdmin } = useAuth();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleConfirmLogout = () => {
    closeModal();
    setIsLoggedIn(false); 
    navigate("/main");

    setTimeout(() => {
      localStorage.removeItem("token");
    }, 100);
  };

  const handleModalClose = () => {
    closeModal();
    if (activeModal === "login" && !localStorage.getItem("token")) {
      navigate("/main");
    }
  };

  const totalItems = cart.reduce((total, product) => total + (product.quantity || 0), 0);

  return (
    <>
      <div className="h-[70px] min-h-[70px] bg-gray-100 text-black p-3 text-md font-bold mb-2">
        <div className="flex flex-row items-center w-full h-11 justify-between">
          <div className="block lg:hidden mr-4">
            <MenuButton onClick={onMenuClick} />
          </div>

          <h1 className="text-3xl">Header</h1>

          <div className="mx-5 flex flex-row items-center gap-4">
            <SearchBarShared />
            {isLoggedIn && !isAdmin && (
              <div>
                <ButtonShared className=" relative w-[36px] h-[36px] flex items-center justify-center p-0"
                onClick={() => navigate("/cart")}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                      {totalItems}
                    </span>
                  )}
                </ButtonShared>
              </div>
            )}
          </div>
          <div className="hidden lg:flex h-[36px] gap-2">
            <AuthButton className="px-8" />
            
            {!isLoggedIn && (
              <div>
                <ButtonShared className="px-8 bg-gray-300 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                onClick={() => navigate("/signup")}>
                  Registrarse
                </ButtonShared>
              </div>
            )}

          </div>
        </div>
      </div>

      <Modal isOpen={!!activeModal} onClose={handleModalClose}>
        {activeModal === "login" && <LoginForm onSuccess={handleLoginSuccess} />}

        {activeModal === "logout" && (
          <LogoutConfirm
            onConfirm={handleConfirmLogout}
            onCancel={closeModal}
          />
        )}
      </Modal>
    </>
  );
};

export default Header;
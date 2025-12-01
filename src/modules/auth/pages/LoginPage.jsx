import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Modal from "../../shared/components/atoms/Modal";
import { useUi } from "../../shared/context/UiContext";

function LoginPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  
  const { setIsLoggedIn } = useUi();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
    
    navigate("/main");
  };

  return (
    <div className="">
      <Modal isOpen={isModalOpen}>
        <LoginForm onSuccess={handleLoginSuccess} />
      </Modal>
    </div>
  );
}

export default LoginPage;
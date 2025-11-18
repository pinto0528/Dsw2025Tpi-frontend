import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Modal from "../../shared/components/atoms/Modal";

function LoginPage() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Funciones para claridad (opcional)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(true);

  return (
    <div
      className="
    "
    >
      {/* Renderiza el Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginForm />
      </Modal>
    </div>
  );
}

export default LoginPage;

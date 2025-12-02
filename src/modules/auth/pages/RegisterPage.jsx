import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Modal from "../../shared/components/atoms/Modal";

function RegisterPage() {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Funciones para claridad (opcional)
  const openModal = () => setIsModalOpen(true);

  return (
    <div
      className="
    "
    >
      {/* Renderiza el Modal */}
      <Modal isOpen={isModalOpen}>
        <RegisterForm />
      </Modal>
    </div>
  );
}

export default RegisterPage;

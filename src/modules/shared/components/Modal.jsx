// (Nuevo archivo) components/Modal.jsx

/**
 * Un modal simple que renderiza 'children' sobre un fondo oscuro.
 * @param {boolean} isOpen - Controla la visibilidad del modal.
 * @param {function} onClose - Función llamada al hacer clic en el fondo.
 * @param {React.ReactNode} children - Contenido a mostrar (tu LoginForm).
 */
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      // Backdrop (fondo oscuro)
      onClick={onClose}
      className="fixed inset-0 bg-blue-50 flex flex-col justify-center items-center z-50"
    >
      {/* Contenedor del Modal (evita cierre al hacer clic dentro) */}
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}

export default Modal;

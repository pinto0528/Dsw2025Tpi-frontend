import React from "react";
import { useNavigate } from "react-router-dom";
import InfoCardShared from "../../shared/components/Atoms/InfoCardShared"; // Tu componente visual

/**
 * Componente inteligente que conecta datos con navegación y visualización.
 * * @param {string} id - El identificador único (SKU, Order ID, etc.)
 * @param {string} title - Título principal
 * @param {string} subtitle - Subtítulo
 * @param {string} basePath - La ruta base para la navegación (ej: "products", "orders")
 * @param {string} [rootPath="/admin"] - (Opcional) Prefijo de la ruta.
 */
const DashboardEntityCard = ({ 
  id, 
  title, 
  subtitle, 
  basePath, 
  rootPath = "/admin" 
}) => {
  const navigate = useNavigate();

  const handleView = () => {
    // Construye la ruta dinámicamente: /admin/products/001 ó /admin/orders/1050
    navigate(`${rootPath}/${basePath}/${id}`);
  };

  return (
    <InfoCardShared
      title={title}
      subtitle={subtitle}
      buttonText="Ver"
      onButtonClick={handleView}
    />
  );
};

export default DashboardEntityCard;
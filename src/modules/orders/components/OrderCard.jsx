import React from "react";
import InfoCardShared from "../../shared/components/InfoCardShared";

/**
 * @typedef {object} OrderCardProps
 * @property {string | number} orderNumber - El número de la orden.
 * @property {string} clientName - El nombre del cliente.
 * @property {string} state - El estado de la orden.
 */

/**
 * Componente específico para mostrar una Orden.
 * Utiliza InfoCardShared para renderizar la UI.
 * @param {OrderCardProps} props
 */
const OrderCard = ({ orderNumber, clientName, state }) => {
  // 1. Formateamos los datos como los necesita InfoCard
  const cardTitle = `N°${orderNumber} - ${clientName}`;
  const cardSubtitle = `Estado: ${state}`;

  // 2. Definimos la acción del botón
  const handleViewOrder = () => {
    console.log(`Viendo orden N° ${orderNumber}`);
    // Aquí iría la lógica para navegar o mostrar un modal
  };

  // 3. Renderizamos el InfoCard con los datos formateados
  return (
    <InfoCardShared
      title={cardTitle}
      subtitle={cardSubtitle}
      onButtonClick={handleViewOrder}
      buttonText="Ver Orden" // O simplemente dejar que use el default "Ver"
    />
  );
};

export default OrderCard;

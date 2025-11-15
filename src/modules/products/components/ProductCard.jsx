import InfoCard from "../../shared/components/InfoCardShared";

/**
 * @typedef {object} ProductCardProps
 * @property {string} sku - El SKU del producto.
 * @property {string} name - El nombre del producto.
 * @property {number | string} stock - La cantidad de stock.
 * @property {string} state - El estado del producto.
 */

/**
 * Muestra una tarjeta de producto, usando InfoCard para la UI.
 * @param {ProductCardProps} props
 */
const ProductCard = ({ sku, name, stock, state }) => {
  // 1. Formatea los datos específicos del producto
  const cardTitle = `${sku} - ${name}`;
  const cardSubtitle = `Stock: ${stock} - Estado: ${state}`;


  const handleViewProduct = () => {
    console.log(`Viendo producto: ${sku}`);
  };


  return (
    <InfoCard
      title={cardTitle}
      subtitle={cardSubtitle}
      onButtonClick={handleViewProduct}
    />
  );
};

export default ProductCard;

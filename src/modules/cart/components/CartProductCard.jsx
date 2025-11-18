import InfoCard from "../../shared/components/Atoms/InfoCardShared";

/**
 * @typedef {object} CartProductCardProps
 * @property {string} name - El nombre del producto.
 * @property {number} quantity - La cantidad de productos en el carrito.
 * @property {number} price - El precio del producto.
 * @property {number} subtotal - La suma de los precios de los productos.
 * @property {string} buttonText - El texto del botón.
 */

/**
 * Muestra una tarjeta de producto, usando InfoCard para la UI.
 * @param {CartProductCardProps} props
 */
const ProductCard = ({ name, quantity, price, subtotal }) => {
  // 1. Formatea los datos específicos del producto
  const cardTitle = `${name}`;
  const cardSubtitle = `Cantidad: ${quantity} - Precio: ${price} - Subtotal: ${subtotal}`;
  const handleViewProduct = () => {
    console.log(`Viendo producto SKU: ${sku}`);
  };

  return (
    <InfoCard
      title={cardTitle}
      subtitle={cardSubtitle}
      onButtonClick={handleViewProduct}
      buttonText="✕"
    />
  );
};

export default ProductCard;

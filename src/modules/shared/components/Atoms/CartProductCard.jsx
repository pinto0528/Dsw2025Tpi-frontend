function CartProductCard({ desc, quant, price }) {
  return (
    <div className="mb-2 p-4 bg-gray-50 shadow-lg rounded-xl">
      <p>{desc}</p>
      <p>
        <span> Cantidad: {quant}</span>
        <span className="ml-2">Precio: ${price}</span>
      </p>
    </div>
  );
}

export default CartProductCard;

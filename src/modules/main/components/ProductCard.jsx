import React from "react";
import { useCart } from "../../../context/CartContext";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";


function ProductCard({ product, image, onAddToCart, quantity }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 shadow-sm rounded-lg mb-4 w-[40dvw] sm:w-[20dvw] lg:w-[15dvw] h-60">
      <div className="">
        <img
          src={image}
          alt={product.name}
          className="w-32 h-32 object-cover mb-2"
        />
      </div>
      <div className="overflow-clip h-6">
        <h2 className="text-[1rem] font-semibold">{product.description}</h2>
      </div>
      <div className="">
        <p className="text-gray-600">${product.currentUnitPrice}</p>
      </div>
      <div >
        <ButtonShared
        onClick={() => addToCart(product)}
        className="mt-2"
      > Agregar al Carrito
      </ButtonShared>
      </div>
      
    </div>
  );
}

export default ProductCard;

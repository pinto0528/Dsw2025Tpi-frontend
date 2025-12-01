import React from "react";
import { useCart } from "../../../context/CartContext";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const hasStock = product.stockQuantity > 0;

  return (
    <div className="group flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      
      {/* 1. Zona de Imagen (Placeholder elegante) */}
      <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-100 transition-colors">
        {/* Como no tienes imagen en la DB, usamos un ícono SVG */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1} 
          stroke="currentColor" 
          className="w-16 h-16 text-gray-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        
        {/* Badge de Sin Stock si aplica */}
        {!hasStock && (
          <div className="absolute top-2 right-2 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
            Agotado
          </div>
        )}
      </div>

      {/* 2. Contenido de la Tarjeta */}
      <div className="p-4 flex flex-col flex-1">
        
        {/* Categoría o SKU pequeño */}
        <p className="text-xs text-gray-400 font-mono mb-1 uppercase tracking-wide">
          {product.sku || "GENERIC"}
        </p>

        {/* Título (limitado a 2 líneas para que no rompa el diseño) */}
        <h2 className="text-gray-900 font-bold text-lg leading-tight mb-2 line-clamp-2" title={product.name}>
          {product.name}
        </h2>

        {/* Descripción corta */}
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {product.description || "Sin descripción disponible."}
        </p>

        {/* 3. Footer: Precio y Botón (usamos mt-auto para empujar al fondo) */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
          <div className="flex justify-between items-end">
             <div>
                <p className="text-xs text-gray-400">Precio</p>
                <p className="text-xl font-bold text-blue-800">
                  ${product.currentUnitPrice?.toLocaleString()}
                </p>
             </div>
             <p className="text-xs text-gray-400">
               Stock: {product.stockQuantity}
             </p>
          </div>

          <ButtonShared
            onClick={() => hasStock && addToCart(product)}
            disabled={!hasStock}
            className={`w-full justify-center py-2.5 font-medium ${
                hasStock 
                ? "bg-blue-300 hover:bg-blue-200 text-blue-800 shadow-md hover:shadow-lg" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {hasStock ? "Agregar al Carrito" : "Sin Stock"}
          </ButtonShared>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
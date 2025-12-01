import React from "react";

/**
 * Tarjeta de producto para el Carrito de Compras.
 * Muestra el detalle, desglose de precio y botón para eliminar.
 */
const ProductCard = ({ id, sku, name, quantity, price, subtotal, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md">
      
      {/* 1. Información del Producto (Izquierda) */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 leading-tight">
          {name}
        </h3>
        <p className="text-xs text-gray-400 font-mono mt-1">
          SKU: {sku || "SIN-SKU"}
        </p>
      </div>

      {/* 2. Bloque de Precios y Cantidad (Derecha) */}
      <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
        
        {/* Precio Unitario x Cantidad */}
        <div className="text-right hidden sm:block">
          <p className="text-xs text-gray-500 mb-1">Precio Unit.</p>
          <div className="text-sm font-medium text-gray-600">
            ${price} <span className="text-xs text-gray-400">x {quantity}</span>
          </div>
        </div>

        {/* Subtotal (Dato más importante) */}
        <div className="text-right min-w-[90px]">
          <p className="text-xs text-gray-500 mb-1">Subtotal</p>
          <p className="text-lg font-bold text-blue-800">
            ${subtotal}
          </p>
        </div>

        {/* 3. Botón Eliminar (Separado por línea) */}
        <div className="pl-4 sm:border-l sm:border-gray-200 sm:ml-2">
          <button
            onClick={() => onDelete(id)} // Pasamos el ID para saber cuál borrar
            className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
            title="Eliminar del carrito"
          >
            {/* Icono de X (SVG) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
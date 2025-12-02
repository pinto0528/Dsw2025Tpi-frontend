import React from "react";

const ProductCard = ({ id, sku, name, quantity, price, subtotal, onDelete, onIncrement, onDecrement }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:shadow-md">
      
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 leading-tight">
          {name}
        </h3>
        <p className="text-xs text-gray-400 font-mono mt-1">
          SKU: {sku || "SIN-SKU"}
        </p>
      </div>

      <div className="flex flex-row items-center gap-4 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
        
        <div className="flex flex-col items-end">
             
             <div className=" flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button 
                    onClick={() => onDecrement(id)}
                    disabled={quantity <= 1}
                    className="p-2 rounded-lg bg-blue-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50 transition-colors"
                >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"   
                      stroke-width={1.5} 
                      stroke="currentColor" 
                      className="w-4 h-4"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>

                </button>
                <span className="px-3 py-1 text-sm font-bold text-gray-700 min-w-[30px] text-center bg-white">
                    {quantity}
                </span>
                <button 
                    onClick={() => onIncrement(id)}
                    className="p-2 rounded-lg bg-blue-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50 transition-colors"
                >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
             </div>
        </div>

        <div className="text-right min-w-[90px]">
          <p className="text-xs text-gray-500 mb-1">Subtotal</p>
          <p className="text-lg font-bold text-blue-800">
            ${subtotal}
          </p>
        </div>

        <div className="pl-4 sm:border-l sm:border-gray-200 sm:ml-2">
          <button
            onClick={() => onDelete(id)} // Pasamos el ID para saber cuál borrar
            className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
            title="Eliminar del carrito"
          >
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
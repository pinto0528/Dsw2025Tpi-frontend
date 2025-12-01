import React from "react";

const DashboardProductItem = ({ name, sku, stock, price, isActive }) => {
  // Lógica visual para el estado
  let statusLabel = "Activo";
  let statusColor = "bg-green-100 text-green-800";

  if (!isActive) {
    statusLabel = "Inactivo";
    statusColor = "bg-gray-200 text-gray-600";
  } else if (stock === 0) {
    statusLabel = "Agotado";
    statusColor = "bg-red-100 text-red-800";
  } else if (stock < 10) {
    statusLabel = "Poco Stock";
    statusColor = "bg-yellow-100 text-yellow-800";
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow">
      
      {/* Izquierda: Info Principal */}
      <div className="flex flex-col">
        <h3 className="text-md font-bold text-gray-800">{name}</h3>
        <span className="text-xs text-gray-400 font-mono">SKU: {sku}</span>
      </div>

      {/* Derecha: Detalles numéricos y Estado */}
      <div className="flex flex-row items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
        
        {/* Precio */}
        <div className="text-right">
          <p className="text-xs text-gray-500">Precio</p>
          <p className="font-semibold text-gray-700">${price}</p>
        </div>

        {/* Stock */}
        <div className="text-right w-16">
          <p className="text-xs text-gray-500">Stock</p>
          <p className={`font-bold ${stock === 0 ? "text-red-500" : "text-gray-700"}`}>
            {stock}
          </p>
        </div>

        {/* Badge de Estado */}
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {statusLabel}
        </div>
      </div>
    </div>
  );
};

export default DashboardProductItem;
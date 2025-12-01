import React from "react";

const DashboardOrderItem = ({ id, customerId, address, total, itemsCount }) => {
  // Cortamos los IDs largos para visualización (UUIDs)
  const shortId = id.substring(0, 8).toUpperCase();
  const shortCustomerId = customerId.substring(0, 8).toUpperCase();

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow">
      
      {/* Izquierda: Identificadores y Dirección */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded">
            ORD #{shortId}
          </span>
          <span className="text-xs text-gray-400">| Cliente: {shortCustomerId}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1 truncate max-w-[300px]">
          📍 {address}
        </p>
      </div>

      {/* Derecha: Totales */}
      <div className="flex flex-row items-center gap-8 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100">
        
        <div className="text-center">
          <p className="text-xs text-gray-500">Items</p>
          <p className="font-medium text-gray-700">{itemsCount}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500">Total</p>
          <p className="text-lg font-bold text-green-600">
            ${total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrderItem;
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
        <p className="text-sm text-gray-600 mt-1 truncate max-w-[300px] flex flex-row items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
        {address}
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
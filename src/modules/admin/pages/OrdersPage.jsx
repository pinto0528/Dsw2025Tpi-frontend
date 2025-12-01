import React, { useEffect, useState } from "react";
import SearchBar from "../../shared/components/DashboardSearchBar";
import { getAllOrders } from "../services/orders"; // <--- Importamos el servicio

const orderSearchOptions = [
  { value: "", label: "Estado" }, // El backend aun no devuelve estado en el GET, pero dejamos el filtro visual
  { value: "todos", label: "Todos" },
];

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const { data, error } = await getAllOrders();
      
      if (error) {
        setError(error);
      } else {
        setOrders(data);
      }
      setLoading(false);
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
        <h1 className="text-2xl font-bold">Órdenes</h1>
        <SearchBar mockOptions={orderSearchOptions} />
      </div>

      <div className="flex flex-col flex-1 bg-gray-100 rounded-lg p-4 shadow-sm overflow-y-auto">
        
        {loading && <p className="text-center mt-4">Cargando órdenes...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        
        {!loading && !error && orders.length === 0 && (
           <p className="text-center mt-4">No hay órdenes registradas.</p>
        )}

        <div className="flex flex-col space-y-2">
          {!loading && orders.map((order) => (
            <div key={order.id} className="bg-white p-3 border rounded shadow-sm flex flex-col gap-1">
              {/* Mostramos los datos crudos que vienen del backend */}
              <p className="font-bold text-sm text-gray-500">ID: {order.id}</p>
              <p><strong>Cliente ID:</strong> {order.customerId}</p>
              <p><strong>Dirección:</strong> {order.shippingAddress}</p>
              <p><strong>Total:</strong> ${order.totalAmount}</p>
              <p className="text-xs text-gray-400">Items: {order.orderItems?.length || 0}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrdersPage;
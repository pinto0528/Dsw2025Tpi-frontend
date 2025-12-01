import React, { useEffect, useState } from "react";
import SearchBar from "../../shared/components/DashboardSearchBar";
import { getAllOrders } from "../services/orders";
// Importamos el nuevo componente
import DashboardOrderItem from "../components/DashboardOrderItem";

const orderSearchOptions = [
  { value: "", label: "Estado" }, 
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
        
        {loading && <p className="text-center mt-10 text-gray-500">Cargando órdenes...</p>}
        {error && <p className="text-center mt-10 text-red-500">{error}</p>}
        
        {!loading && !error && orders.length === 0 && (
           <p className="text-center mt-10 text-gray-500">No hay órdenes registradas.</p>
        )}

        <div className="flex flex-col space-y-2">
          {!loading && orders.map((order) => (
            <DashboardOrderItem 
                key={order.id}
                id={order.id}
                customerId={order.customerId}
                address={order.shippingAddress}
                total={order.totalAmount}
                itemsCount={order.orderItems ? order.orderItems.length : 0}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OrdersPage;
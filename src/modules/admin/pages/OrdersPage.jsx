import SearchBar from "../../shared/components/SearchBar";
import OrderCard from "../components/OrderCard";

const mockOrders = [
  { orderNumber: 1, clientName: "Cliente Uno", state: "Pendiente" },
  { orderNumber: 2, clientName: "Cliente Dos", state: "Enviado" },
  { orderNumber: 3, clientName: "Cliente Tres", state: "Entregado" },
  { orderNumber: 4, clientName: "Cliente Cuatro", state: "Cancelado" },
];

const orderSearchOptions = [
  { value: "", label: "Estado" },
  { value: "pendiente", label: "Pendiente" },
  { value: "enviado", label: "Enviado" },
  { value: "entregado", label: "Entregado" },
  { value: "cancelado", label: "Cancelado" },
];

const OrdersPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <div
        className="
        flex
        flex-col
        mb-2
        bg-gray-100
        rounded-lg
        p-4
      "
      >
        <h1 className="text-2xl font-bold">Ordenes</h1>
        <SearchBar mockOptions={orderSearchOptions} />
      </div>
      <div
        className="
        flex
        flex-col
        flex-1
        bg-gray-100
        rounded-lg
        p-4
        shadow-sm
        overflow-y-auto
        mb-2
      "
      >
        <div className="flex flex-col space-y-3">
          {mockOrders.map((order) => (
            <OrderCard key={order.orderNumber} {...order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

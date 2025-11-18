import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import CartProductCard from "../components/CartProductCard";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ButtonShared from "../../shared/components/atoms/ButtonShared";

function CartPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const mockProducts = [
    {
      name: "Nombre de Producto Uno",
      quantity: 150,
      price: 100,
      subtotal: 0,
    },
    {
      name: "Nombre de Producto Dos",
      quantity: 0,
      price: 100,
      subtotal: 0,
    },
    {
      name: "Nombre de Producto Tres",
      quantity: 75,
      price: 100,
      subtotal: 0,
    },
    {
      name: "Nombre de Producto Cuatro",
      quantity: 20,
      price: 100,
      subtotal: 0,
    },
    {
      name: "Nombre de Producto Cinco",
      quantity: 150,
      price: 100,
      subtotal: 0,
    },
    {
      name: "Nombre de Producto Seis",
      quantity: 0,
      price: 100,
      subtotal: 0,
    },
  ];

  return (
    <div className="flex flex-col overflow-auto h-screen">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 pb-2 overflow-auto">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 px-2 overflow-auto">
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
              <h1 className="text-2xl font-bold">Carrito de Compras</h1>
            </div>

            <div className="flex flex-col flex-1 bg-gray-100 rounded-t-lg p-4 shadow-sm overflow-y-auto gap-1">
              {mockProducts.map((product) => (
                <CartProductCard
                  key={product.desc}
                  name={product.name}
                  quantity={product.quantity}
                  price={product.price}
                  subtotal={product.price * product.quantity}
                />
              ))}
            </div>
            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-b-lg p-4">
              <span className="text-xl font-bold">Total: $$$$$$$ </span>
              <ButtonShared className="w-40">Finalizar Compra</ButtonShared>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

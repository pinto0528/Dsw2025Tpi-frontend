import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import CartProductCard from "../../shared/components/Atoms/CartProductCard";
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
      desc: "Nombre de Producto Uno",
      quant: 150,
      price: 100,
    },
    {
      desc: "Nombre de Producto Dos",
      quant: 0,
      price: 100,
    },
    {
      desc: "Nombre de Producto Tres",
      quant: 75,
      price: 100,
    },
    {
      desc: "Nombre de Producto Cuatro",
      quant: 20,
      price: 100,
    },
    {
      desc: "Nombre de Producto Cinco",
      quant: 150,
      price: 100,
    },
    {
      desc: "Nombre de Producto Seis",
      quant: 0,
      price: 100,
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

            <div className="flex flex-col flex-1 bg-gray-100 rounded-t-lg p-4 shadow-sm overflow-y-auto">
              {mockProducts.map((product) => (
                <CartProductCard
                  desc={product.desc}
                  quant={product.quant}
                  price={product.price}
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

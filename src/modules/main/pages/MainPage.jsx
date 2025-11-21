import React, { useState } from "react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import ProductCard from "../components/ProductCard";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [products, setProducts] = useState([
    {
      key: 1,
      name: "Producto Uno",
      quantity: 150,
      price: 100,
      stock: 500,
    },
    {
      key: 2,
      name: "Producto Dos",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 3,
      name: "Producto Tres",
      quantity: 75,
      price: 100,
      stock: 500,
    },
    {
      key: 4,
      name: "Producto Cuatro",
      quantity: 20,
      price: 100,
      stock: 500,
    },
    {
      key: 5,
      name: "Producto Cinco",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 6,
      name: "Producto Seis",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 7,
      name: "Producto Siete",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 8,
      name: "Producto Ocho",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 9,
      name: "Producto Nueve",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 10,
      name: "Producto Diez",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 11,
      name: "Producto Once",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 12,
      name: "Producto Doce",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 13,
      name: "Producto Trece",
      quantity: 0,
      price: 100,
      stock: 500,
    },
    {
      key: 14,
      name: "Producto Catorce",
      quantity: 0,
      price: 100,
      stock: 500,
    },
  ]);

  return (
    <div className="flex flex-col overflow-auto h-screen">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 pb-2 overflow-auto">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 px-2 overflow-auto">
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
              <h1 className="text-2xl font-bold">Main Page</h1>
            </div>

            <div className="flex flex-col flex-1 bg-gray-100 rounded-lg p-4 shadow-sm overflow-y-auto gap-1">
              <div
                className="
              border border-b-blue-600 
              place-items-center
              grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 "
              >
                {products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

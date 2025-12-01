import React, { useState, useEffect } from "react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../../admin/services/products"; // Reutilizamos el servicio

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const { data, error } = await getAllProducts();
      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        
        {/* Área Principal con Scroll */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-100 mb-2 mx-2 rounded-lg">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Catálogo</h1>
              <p className="text-gray-500 mt-1">Explora nuestros productos disponibles</p>
            </div>

            {loading ? (
              <div className="text-center py-20 text-gray-400">Cargando catálogo...</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard key={product.id || product.sku} product={product} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">
                    No se encontraron productos.
                  </p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
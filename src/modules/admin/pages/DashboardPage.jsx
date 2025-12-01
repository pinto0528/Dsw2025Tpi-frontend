import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import { getAllOrders } from "../services/orders";

const DashboardPage = () => {
  const [stats, setStats] = useState({ productCount: 0, orderCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // Ejecutamos ambas peticiones en paralelo para que sea más rápido
        const [productsRes, ordersRes] = await Promise.all([
          getAllProducts(),
          getAllOrders(),
        ]);

        // Verificamos errores
        if (productsRes.error || ordersRes.error) {
          setError(productsRes.error || ordersRes.error);
        } else {
          setStats({
            productCount: productsRes.data?.length || 0,
            orderCount: ordersRes.data?.length || 0,
          });
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar datos del dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
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
      "
    >
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {loading && <p className="text-gray-500">Cargando estadísticas...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-300 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Productos</h2>
            <p className="text-gray-600">
              Cantidad de Productos: <span className="text-3xl font-bold text-blue-600 block mt-2">{stats.productCount}</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-300 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Órdenes</h2>
            <p className="text-gray-600">
              Cantidad de Órdenes: <span className="text-3xl font-bold text-blue-600 block mt-2">{stats.orderCount}</span>
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default DashboardPage;
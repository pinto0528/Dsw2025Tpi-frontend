import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import { getAllOrders } from "../services/orders";

const DashboardPage = () => {
  // 1. Ampliamos el estado para guardar las nuevas métricas
  const [stats, setStats] = useState({
    productCount: 0,
    orderCount: 0,
    totalRevenue: 0,    // Nueva
    averageTicket: 0,   // Nueva
    lowStockCount: 0,   // Nueva
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        const [productsRes, ordersRes] = await Promise.all([
          getAllProducts(),
          getAllOrders(),
        ]);

        if (productsRes.error || ordersRes.error) {
          setError(productsRes.error || ordersRes.error);
        } else {
          const products = productsRes.data || [];
          const orders = ordersRes.data || [];
          
          const totalIncome = orders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);

          const avgTicket = orders.length > 0 ? (totalIncome / orders.length) : 0;

          const criticalStock = products.filter(p => p.stockQuantity <= 10 && p.isActive).length;

          setStats({
            productCount: products.length,
            orderCount: orders.length,
            totalRevenue: totalIncome,
            averageTicket: avgTicket,
            lowStockCount: criticalStock,
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
    <div className="flex flex-col flex-1 bg-gray-100 rounded-lg p-4 shadow-sm overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard General</h1>

      {loading && <p className="text-gray-500">Calculando estadísticas...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. PRODUCTOS */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Productos Totales</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{stats.productCount}</p>
          </div>

          {/* 2. ORDENES */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Órdenes Totales</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">{stats.orderCount}</p>
          </div>

          {/* 3. INGRESOS */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Ingresos Totales</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ${stats.totalRevenue.toLocaleString()}
            </p>
          </div>

          {/* 4. STOCK CRITICO */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Stock Crítico</h2>
            <p className="text-3xl font-bold text-red-600 mt-2">{stats.lowStockCount}</p>
            <span className="text-sm font-bold text-gray-400">Productos con menos de 10 u.</span>
          </div>

          {/* 5. TICKET PROMEDIO */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <h2 className="text-gray-500 text-sm font-semibold uppercase">Ticket Promedio</h2>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              ${stats.averageTicket.toFixed(2)}
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default DashboardPage;
import { Routes, Route } from "react-router-dom";

// 1. Importa tu layout y las páginas que irán dentro
import AdminLayout from "../templates/AdminLayout";
import DashboardPage from "./DashboardPage";

import ProductsPage from "./ProductsPage";
import CreateProductsPage from "./CreateProductsPage";
import ProductDetailPage from "./ProductsDetailPage";

import OrdersPage from "./OrdersPage";
import OrderDetailPage from "./OrdersDetailPage";

function AdminPage() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/create" element={<CreateProductsPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orders/:orderId" element={<OrderDetailPage />} />
      </Route>
    </Routes>
  );
}

export default AdminPage;

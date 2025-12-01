import { Routes, Route } from "react-router-dom";

// 1. Importa tu layout y las páginas que irán dentro
import AdminLayout from "../templates/AdminLayout";
import DashboardPage from "./DashboardPage";
import ProductsPage from "./ProductsPage";
import OrdersPage from "./OrdersPage";
import CreateProductsPage from "./CreateProductsPage";
import ProductsDetailPage from "./ProductsDetailPage";

function AdminPage() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/create" element={<CreateProductsPage />} />
        <Route path="products/:sku" element={<ProductsDetailPage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
}

export default AdminPage;

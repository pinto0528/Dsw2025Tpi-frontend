import { Routes, Route } from "react-router-dom";

// 1. Importa tu layout y las páginas que irán dentro
import AdminLayout from "../templates/AdminLayout";
import ProductsPage from "../../products/pages/ProductsPage";
import OrdersPage from "../../orders/pages/OrdersPage";

function AdminPage() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
}

export default AdminPage;

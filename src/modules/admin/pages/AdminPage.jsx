import { Routes, Route } from "react-router-dom";

// 1. Importa tu layout y las páginas que irán dentro
import AdminLayout from "../templates/AdminLayout";
import ProductsPage from "../../products/pages/ProductsPage";

function AdminPage() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default AdminPage;

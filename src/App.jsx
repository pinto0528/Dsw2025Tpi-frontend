import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./modules/auth/pages/LoginPage";
import AdminPage from "./modules/admin/pages/AdminPage";
import RegisterPage from "./modules/auth/pages/RegisterPage";
import CartPage from "./modules/cart/pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login */}
        <Route path="/" element={<LoginPage />} />

        {/* Ruta de registro */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas de administrador */}
        <Route path="/admin/*" element={<AdminPage />} />

        <Route path="/cart/*" element={<CartPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

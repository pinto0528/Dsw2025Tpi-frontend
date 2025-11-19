import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./modules/main/pages/MainPage";
import LoginPage from "./modules/auth/pages/LoginPage";
import AdminPage from "./modules/admin/pages/AdminPage";
import RegisterPage from "./modules/auth/pages/RegisterPage";
import CartPage from "./modules/cart/pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/admin/*" element={<AdminPage />} />

        <Route path="/cart/*" element={<CartPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

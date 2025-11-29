import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./modules/main/pages/MainPage";
import LoginPage from "./modules/auth/pages/LoginPage";
import AdminPage from "./modules/admin/pages/AdminPage";
import RegisterPage from "./modules/auth/pages/RegisterPage";
import CartPage from "./modules/cart/pages/CartPage";
import AccountPage from "./modules/account/pages/AccountPage";
import ProtectedRoute from "./modules/shared/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/main' element={<MainPage/>} />

        {/* RUTAS PRIVADAS */}
        <Route element={<ProtectedRoute />}>
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/cart/*" element={<CartPage />} />
            <Route path="/account/*" element={<AccountPage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./modules/main/pages/MainPage";
import LoginPage from "./modules/auth/pages/LoginPage";
import AdminPage from "./modules/admin/pages/AdminPage";
import RegisterPage from "./modules/auth/pages/RegisterPage";
import CartPage from "./modules/cart/pages/CartPage";
import AccountPage from "./modules/account/pages/AccountPage";
import ProtectedRoute from "./modules/shared/components/ProtectedRoute";
import RequireAdmin from "./modules/shared/components/RequireAdmin"; 
import { UiProvider } from "./modules/shared/context/UiContext";

function App() {
  return (
    <UiProvider>
    <BrowserRouter>
      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path='/main' element={<MainPage/>} />


        <Route element={<ProtectedRoute />}>
            

            <Route path="/cart/*" element={<CartPage />} />
            <Route path="/account/*" element={<AccountPage/>} />


            <Route element={<RequireAdmin />}>
                <Route path="/admin/*" element={<AdminPage />} />
            </Route>

        </Route>

      </Routes>
    </BrowserRouter>
    </UiProvider>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./modules/auth/pages/LoginPage";
import AdminPage from "./modules/shared/pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de login */}
        <Route path="/" element={<LoginPage />} />

        {/* Rutas de administrador */}
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

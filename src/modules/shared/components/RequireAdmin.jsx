import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useUi } from "../../shared/context/UiContext";

const RequireAdmin = () => {
  const token = localStorage.getItem("token");
  const { openLoginModal } = useUi();

  if (!token) {
    useEffect(() => {
      openLoginModal();
    }, []);

    return <Navigate to="/main" replace />;
  }


  try {
    const decoded = jwtDecode(token);
    const roleClaim = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || decoded.role;

    let isAdmin = false;

    if (Array.isArray(roleClaim)) {
      isAdmin = roleClaim.includes("ADMIN");
    } else {
      isAdmin = roleClaim === "ADMIN";
    }

    if (!isAdmin) {
        return <Navigate to="/main" replace />;
    }

    return <Outlet />;

  } catch (error) {
    localStorage.removeItem("token");
    
    useEffect(() => {
        openLoginModal();
    }, []);

    return <Navigate to="/main" replace />;
  }
};

export default RequireAdmin;
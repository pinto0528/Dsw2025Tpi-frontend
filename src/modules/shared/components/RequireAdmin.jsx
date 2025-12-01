import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const RequireAdmin = () => {
  const token = localStorage.getItem("token");


  if (!token) {
    return <Navigate to="/" replace />;
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
      return <Navigate to="/" replace />;
    }


    return <Outlet />;

  } catch (error) {

    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }
};

export default RequireAdmin;
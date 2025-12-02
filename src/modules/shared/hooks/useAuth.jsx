import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  let isAdmin = false;
  let isLoggedIn = !!token;
  let userId = null; // <--- Nuevo campo

  if (token) {
    try {
      const decoded = jwtDecode(token);

      console.log("Decoded JWT:", decoded);

      userId = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

      const roleClaim = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || decoded.role;

      if (Array.isArray(roleClaim)) {
        isAdmin = roleClaim.includes("ADMIN");
      } else {
        isAdmin = roleClaim === "ADMIN";
      }
    } catch (error) {
      console.error("Token inválido", error);
      isLoggedIn = false;
      isAdmin = false;
      userId = null;
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return { isAdmin, isLoggedIn, userId, logout };
};
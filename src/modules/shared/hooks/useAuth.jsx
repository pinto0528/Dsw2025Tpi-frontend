import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  let isAdmin = false;
  let isLoggedIn = !!token;
  let user = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);

      const userId = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] 
                     || decoded.id 
                     || decoded.uid;

       const roleClaim = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || decoded.role;
      const roleString = Array.isArray(roleClaim) ? roleClaim.join(", ") : roleClaim;

      const username = decoded.sub || "Usuario";

      if (Array.isArray(roleClaim)) {
        isAdmin = roleClaim.includes("ADMIN");
      } else {
        isAdmin = roleClaim === "ADMIN";
      }

      user = {
        id: userId,
        username: username,
        role: roleString,
        email: decoded.email || "No especificado", 
        expiration: new Date(decoded.exp * 1000).toLocaleString() // Fecha de vencimiento de sesión
      };

    } catch (error) {
      console.error("Token inválido", error);
      isLoggedIn = false;
      isAdmin = false;
      user = null;
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
return { isAdmin, isLoggedIn, user, logout };
};
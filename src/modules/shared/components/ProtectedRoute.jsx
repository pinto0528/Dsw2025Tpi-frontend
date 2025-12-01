import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUi } from "../../shared/context/UiContext";



const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const { openLoginModal } = useUi();

  if (!token) {
    useEffect(() => {
      openLoginModal();
    }, []);
  }

  return <Outlet />;
};

export default ProtectedRoute;
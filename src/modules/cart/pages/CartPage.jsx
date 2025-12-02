import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import CartProductCard from "../components/CartProductCard";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";

import { useCart } from "../../../context/CartContext";
import { useUi } from "../../shared/context/UiContext";

import { createOrder } from "../services/orders"; 

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { isLoggedIn, openLoginModal } = useUi();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingCheckout, setPendingCheckout] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleIncrement = (sku) => {
    const product = cart.find(p => p.sku === sku);
    if(product) updateQuantity(sku, product.quantity + 1);
  };

  const handleDecrement = (sku) => {
    const product = cart.find(p => p.sku === sku);
    if(product && product.quantity > 1) updateQuantity(sku, product.quantity - 1);
  };

  const { processedCart, total } = useMemo(() => {
    const processedCart = cart.map((product) => ({
      ...product,
      quantity: product.quantity || 1, 
      subtotal: product.currentUnitPrice * (product.quantity || 1),
    }));
    const total = processedCart.reduce((acc, p) => acc + p.subtotal, 0);
    return { processedCart, total };
  }, [cart]);

// --- LÓGICA DE PROCESAR ORDEN CORREGIDA ---
  const processOrder = async () => {
      setLoading(true);
      try {
        // 1. Obtener token
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No hay token de autenticación");

        // 2. Decodificar para buscar el ID real
        const decoded = jwtDecode(token);
        console.log("TOKEN DECODIFICADO:", decoded); // Para depuración

        // 3. ESTRATEGIA DE BÚSQUEDA DE ID:
        // a. Buscamos el claim estándar de .NET Identity (nameidentifier)
        const idClaimNet = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
        
        // b. Buscamos en orden: nameidentifier -> id -> uid
        let customerId = decoded[idClaimNet] || decoded.id || decoded.uid;

        // c. Fallback: Si no encontramos nada, miramos si 'sub' parece un UUID (tiene guiones)
        // Esto evita que tomemos "Client" como ID.
        if (!customerId && decoded.sub && decoded.sub.includes("-")) {
            customerId = decoded.sub;
        }

        console.log("ID SELECCIONADO:", customerId);

        // 4. Validación crítica antes de enviar
        if (!customerId) {
           console.error("ERROR CRÍTICO: No se encontró un UUID en el token.", decoded);
           alert("Error de sistema: El token de usuario no contiene un ID válido. Avise al administrador.");
           setLoading(false);
           setPendingCheckout(false);
           return;
        }

        // 5. Llamada al servicio (Asegúrate de haber corregido orders.js también)
        const { data, error } = await createOrder(cart, customerId, token);

        // 6. Manejo de error del backend
        if (error) {
          console.error("Error devuelto por createOrder:", error);
          alert(error.frontendErrorMessage || "Hubo un problema al crear la orden."); 
          setLoading(false);
          setPendingCheckout(false);
          return; 
        }

        // 7. Éxito
        clearCart();
        alert("¡Compra realizada con éxito!");
        navigate("/products"); // O "/orders" si tienes esa vista

      } catch (err) {
        console.error("Excepción en processOrder:", err);
        alert("Ocurrió un error inesperado al intentar procesar la compra.");
      } finally {
        setLoading(false);
        setPendingCheckout(false);
      }
  };

  const handleFinalizePurchase = () => {
    if (cart.length === 0) return;

    if (isLoggedIn) {
      processOrder();
    } else {
      setPendingCheckout(true);
      openLoginModal();
    }
  };

  useEffect(() => {
    if (isLoggedIn && pendingCheckout) {
      processOrder();
    }
  }, [isLoggedIn, pendingCheckout]); 


  return (
    <div className="flex flex-col overflow-auto h-screen">
      <Header onMenuClick={toggleSidebar} />
      <div className="flex flex-1 pb-2 overflow-auto">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex flex-col flex-1 px-2 overflow-auto">
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
              <h1 className="text-2xl font-bold">Carrito de Compras</h1>
            </div>

            <div className="flex flex-col flex-1 bg-gray-100 rounded-t-lg p-4 shadow-sm overflow-y-auto gap-1">
              {processedCart.length === 0 ? (
                 <p className="text-center p-10 text-gray-500">El carrito está vacío</p>
              ) : (
                  processedCart.map((product) => (
                    <CartProductCard
                      key={product.sku}
                      id={product.id}
                      sku={product.sku}
                      name={product.description}
                      quantity={product.quantity}
                      price={product.currentUnitPrice}
                      subtotal={product.subtotal}
                      onDelete={() => removeFromCart(product.sku)}
                      onIncrement={() => handleIncrement(product.sku)}
                      onDecrement={() => handleDecrement(product.sku)}
                    />
                  ))
              )}
            </div>

            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-b-lg p-4">
              <span className="text-xl font-bold">
                Total: ${total.toFixed(2)}
              </span>
              <ButtonShared 
                 className={`w-40 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                 onClick={handleFinalizePurchase}
                 disabled={loading || cart.length === 0}
               >
                 {loading ? "Procesando..." : "Finalizar Compra"}
               </ButtonShared>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
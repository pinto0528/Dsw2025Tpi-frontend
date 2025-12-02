import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import CartProductCard from "../components/CartProductCard";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";

import { useCart } from "../context/CartContext";
import { useUi } from "../../shared/context/UiContext";
import { useAuth } from "../../shared/hooks/useAuth";

import { createOrder } from "../services/orders"; 

function CartPage() {
  const navigate = useNavigate();
  
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { openLoginModal } = useUi();
  
  const { isLoggedIn, userId } = useAuth(); 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingCheckout, setPendingCheckout] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);


  const handleIncrement = (sku) => {
    const product = cart.find(p => p.sku === sku);
    if(product && product.quantity < product.stockQuantity) {
        updateQuantity(sku, product.quantity + 1);
    }
  };

  const handleDecrement = (sku) => {
    const product = cart.find(p => p.sku === sku);
    if(product && product.quantity > 1) {
        updateQuantity(sku, product.quantity - 1);
    }
  };

  // Cálculos de totales
  const { processedCart, total } = useMemo(() => {
    const list = cart.map((product) => ({
      ...product,
      quantity: product.quantity || 1, 
      subtotal: (product.currentUnitPrice || 0) * (product.quantity || 1),
    }));
    const totalCalc = list.reduce((acc, p) => acc + p.subtotal, 0);
    return { processedCart: list, total: totalCalc };
  }, [cart]);


  const processOrder = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        

        if (!token || !userId) {
           alert("Error de sesión: No se pudo identificar al usuario. Por favor, inicie sesión nuevamente.");
           setLoading(false);
           setPendingCheckout(false);
           return;
        }


        const { error } = await createOrder(cart, userId, token);

        if (error) {
          console.error("Error al crear orden:", error);

          alert(error.frontendErrorMessage || "Hubo un problema al crear la orden."); 
        } else {
          clearCart();
          alert("¡Orden creada con éxito!");
          navigate("/main");
        }

      } catch (err) {
        console.error("Excepción en processOrder:", err);
        alert("Ocurrió un error inesperado al procesar la compra.");
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
    <div className="flex flex-col h-screen overflow-hidden bg-blue-100">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden pb-2">
        <Sidebar isOpen={isSidebarOpen} />
        
        <div className="flex flex-col flex-1 px-2 overflow-hidden">
          <div className="flex flex-col flex-1 overflow-hidden mx-auto w-full">
            
            {/* Header Carrito */}
            <div className="flex flex-col bg-gray-100 rounded-lg p-6 mb-2 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800">Carrito de Compras</h1>
            </div>

            {/* Lista de Items */}
            <div className="flex flex-col flex-1 bg-gray-100 rounded-t-lg p-4 shadow-sm overflow-y-auto gap-3">
              {processedCart.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <p className="text-lg font-medium">El carrito está vacío</p>
                 </div>
              ) : (
                  processedCart.map((product) => (
                    <CartProductCard
                      key={product.sku}
                      id={product.id}
                      sku={product.sku}
                      name={product.name}
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

            {/* Footer Total */}
            <div className="bg-white border border-gray-200 border-t-0 rounded-b-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <span className="text-gray-500 text-sm">Total Estimado</span>
                        <div className="text-3xl font-bold text-gray-900">
                            ${total.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                        </div>
                    </div>
                    <div>
                        <ButtonShared 
                            className={`px-10 mt-4 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
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
      </div>
    </div>
  );
}

export default CartPage;
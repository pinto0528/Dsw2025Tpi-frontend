import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import CartProductCard from "../components/CartProductCard";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";

import { useState, useMemo } from "react";
import { useCart } from "../../../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Calcular subtotal por producto y total
  const { cartList, total } = useMemo(() => {
    const cartList = cart.map((product) => ({
      ...product,
      quantity: 1, // por ahora fijo, luego lo hacemos editable
      subtotal: product.currentUnitPrice * 1,
    }));

    const total = cartList.reduce((acc, p) => acc + p.subtotal, 0);

    return { cartList, total };
  }, [cart]);

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
              {cartList.map((product) => (
                <CartProductCard
                  id={product.id}
                  sku={product.sku}
                  key={product.sku}
                  name={product.description}
                  quantity={product.quantity}
                  price={product.currentUnitPrice}
                  subtotal={product.subtotal}
                  onDelete={() => removeFromCart(product.sku)}
                />
              ))}
            </div>

            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-b-lg p-4">
              <span className="text-xl font-bold">
                Total: {total.toFixed(2)}
              </span>
              <ButtonShared className="w-40">Finalizar Compra</ButtonShared>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

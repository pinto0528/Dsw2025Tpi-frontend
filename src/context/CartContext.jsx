import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      // evitar duplicados
      const exists = prev.find((p) => p.sku === product.sku);
      if (exists) return prev;

      return [...prev, product];
    });
  };

  const removeFromCart = (sku) => {
    setCart((prev) => prev.filter((p) => p.sku !== sku));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

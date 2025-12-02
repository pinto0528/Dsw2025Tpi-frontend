import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      // evitar duplicados
      const exists = prev.find((p) => p.sku === product.sku);
      if (exists) return prev;

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (sku) => {
    setCart((prev) => prev.filter((p) => p.sku !== sku));
  };

  const updateQuantity = (sku, newQuantity) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.sku === sku) {
           return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./elements.css";
import App from "./App.jsx";
import { CartProvider } from "./modules/cart/context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);

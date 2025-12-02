import { frontendErrorMessage } from '../../auth/helpers/backendError';

const API_URL = "http://localhost:5142/api/orders";

export const createOrder = async (cartItems, customerId, token) => {
  
  const payload = {
    customerId: customerId, 
    shippingAddress: "Dirección predeterminada (Falta implementar en Front)",
    billingAddress: "Dirección predeterminada (Falta implementar en Front)",
    notes: "Pedido creado desde la Web",
    orderItems: cartItems.map((item) => ({
      productId: item.id,
      quantity: item.quantity || 1
    }))
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json();
      } catch (e) {
        // Si el backend no devuelve JSON en el error
        errorData = { code: 'UNKNOWN_ERROR' };
      }

      return {
        data: null,
        error: {
          ...errorData,
          frontendErrorMessage: frontendErrorMessage[errorData.code] || "Ocurrió un error al procesar la compra.",
        },
      };
    }

    const data = await response.json();
    return { data, error: null };

  } catch (error) {
    console.error("Error de red:", error);
    return {
      data: null,
      error: {
        frontendErrorMessage: "Error de conexión. Verifica tu internet.",
      },
    };
  }
};
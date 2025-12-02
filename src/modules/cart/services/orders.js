import { frontendErrorMessage } from '../../auth/helpers/backendError';

export const createOrder = async (cartItems, customerId, token) => {
  

  const payload = {
    customerId: customerId,
    shippingAddress: "Dirección Test",
    billingAddress: "Dirección Test",
    notes: "Pedido Web",
    orderItems: cartItems.map((item) => ({
      productId: item.id, 
      quantity: item.quantity || 1
    }))
  };

  console.group("DEBUG CREATE ORDER");
  console.log("1. Customer ID recibido:", customerId);
  console.log("2. Token recibido:", token);
  console.log("3. Payload FINAL a enviar:", JSON.stringify(payload, null, 2));
  console.groupEnd();


  try {
    const response = await fetch('/api/orders', {
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

        console.error("ERROR BACKEND:", errorData);
      } catch (e) {
        errorData = { title: 'Error desconocido' };
      }

      let specificError = "";
      if (errorData.errors) {
        const firstKey = Object.keys(errorData.errors)[0];
        if (firstKey) specificError = errorData.errors[firstKey][0];
      }

      return {
        data: null,
        error: {
          ...errorData,
          frontendErrorMessage: specificError || errorData.title || "Error en la compra.",
        },
      };
    }

    const data = await response.json();
    return { data, error: null };

  } catch (error) {
    console.error("Error de red:", error);
    return { data: null, error: { frontendErrorMessage: "Error de conexión." } };
  }
};
export const getAllOrders = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch('/api/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (response.status === 401) {
      return { data: null, error: "No autorizado. Inicie sesión nuevamente." };
    }

    if (response.status === 403) {
      return { data: null, error: "No tienes permisos de Administrador." };
    }

    if (response.status === 204) {
      return { data: [], error: null };
    }

    if (!response.ok) {
      return { data: null, error: 'Error al cargar las órdenes' };
    }

    const data = await response.json();
    return { data: data, error: null };

  } catch (error) {
    console.error(error);
    return { data: null, error: 'Error de conexión' };
  }
};
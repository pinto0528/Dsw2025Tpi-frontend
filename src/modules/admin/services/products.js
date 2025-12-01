

export const getAllProducts = async () => {
  try {
    const response = await fetch('/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 204) {
      return { data: [], error: null };
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        data: null,
        error: {
          message: errorData.title || "Error al obtener productos",
        },
      };
    }

    const data = await response.json();
    return { data: data, error: null };

  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: { message: "Error de conexión con el servidor" },
    };
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`/api/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { data: null, error: 'Error al cargar el producto' };
    }

    const data = await response.json();
    return { data: data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'Error de conexión' };
  }
};
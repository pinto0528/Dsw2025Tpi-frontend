import { frontendErrorMessage } from '../helpers/backendError';

/**
 * Registra un nuevo usuario.
 * @param {object} formData - Datos del formulario de registro.
 * @param {string} formData.username
 * @param {string} formData.email
 * @param {string} formData.role
 * @param {string} formData.password
 */
export const registerUser = async (formData) => {
  // Destructuramos para no enviar 'confirmPassword' al backend
  const { username, email, role, password } = formData;

  const response = await fetch('api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, role, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();

    return {
      data: null,
      error: {
        ...errorData,
        frontendErrorMessage: frontendErrorMessage[errorData.code] || 'Error al registrar',
      },
    };
  }

  
  const data = await response.json();

  return { data: data, error: null };
};
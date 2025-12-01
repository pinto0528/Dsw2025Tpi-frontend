import { frontendErrorMessage } from '../helpers/backendError';

export const registerUser = async (formData) => {
  
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

    let code = '';
    
    if (Array.isArray(errorData) && errorData.length > 0) {
        code = errorData[0].code;
    } else {
        code = errorData.code || 'Default';
    }

    return {
      data: null,
      error: {
        originalError: errorData, 
        frontendErrorMessage: frontendErrorMessage[code] || 'Error al registrar el usuario',
      },
    };
  }

  const data = await response.json();

  return { data: data, error: null };
};
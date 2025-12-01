import { useForm } from "react-hook-form";
import InputShared from "../../shared/components/atoms/InputShared";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import { useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";

// 1. ACEPTAR LA PROP onSuccess (que viene del Header como closeModal)
function LoginForm({ onSuccess }) { 
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { username: "", password: "" } });

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await login(formData.username, formData.password);
      
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        
        if (onSuccess) {
          onSuccess();
        } else {
          navigate("/main");
        }
        
      } else {
        setErrorMessage(response.error.frontendErrorMessage);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  

  const handleRegister = () => {
    if (onSuccess) onSuccess(); 
    navigate("/signup");
  };

  return (
    <form
      className="
        flex flex-col gap-2 bg-white p-8 rounded-lg shadow-lg
        min-w-[300px] w-[100dvw] sm:w-[70dvw] md:w-[60dvw] lg:w-[50dvw] max-w-[600px]
      "
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-2xl font-bold pb-2">Iniciar Sesión</p>

      <InputShared
        label="Usuario"
        {...register("username", { required: "Usuario es obligatorio" })}
        error={errors.username?.message}
      />
      <InputShared
        label="Contraseña"
        {...register("password", { required: "Contraseña es obligatorio" })}
        type="password"
        error={errors.password?.message}
      />

      <ButtonShared type="submit">Iniciar Sesión</ButtonShared>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <ButtonShared
        type="button"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800"
        onClick={handleRegister}
      >
        Registrarse
      </ButtonShared>
    </form>
  );
}

export default LoginForm;
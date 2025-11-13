import { useForm } from "react-hook-form";
import InputShared from "../../shared/components/InputShared";
import ButtonShared from "../../shared/components/ButtonShared";
import { useState } from "react";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { username: "", password: "" } });

  const onValid = async (formData) => {
    try {
      const { data, error } = await login(formData.username, formData.password);

      if (error) {
        setErrorMessage(error.frontendErrorMessage);

        return;
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Llame a soporte");
    }
  };

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <form
      className="
        flex
        flex-col
        gap-20
        bg-white
        p-8
        sm:w-md
        sm:gap-4
        sm:rounded-lg
        sm:shadow-lg
      "
      onSubmit={handleSubmit(onValid)}
    >
      <p
        className="
        text-2xl
        font-bold
        pb-2
    
    "
      >
        Iniciar Sesión
      </p>

      <InputShared
        label="Usuario"
        {...register("username", {
          required: "Usuario es obligatorio",
        })}
        error={errors.username?.message}
      />
      <InputShared
        label="Contraseña"
        {...register("password", {
          required: "Contraseña es obligatorio",
        })}
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
        Registro
      </ButtonShared>
    </form>
  );
}

export default LoginForm;

import { useForm } from "react-hook-form";
import InputShared from "../../shared/components/atoms/InputShared";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import { useState } from "react";
import { registerUser } from "../services/register";
import { useNavigate } from "react-router-dom"; // Importamos para redirigir tras registro

function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      role: "", 
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onValid = async (formData) => {
    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role.toUpperCase()
      };

      // 2. LLAMAR AL SERVICIO
      const { data, error } = await registerUser(payload);

      if (error) {
        // Manejo de errores que vienen del backend
        setErrorMessage(error.frontendErrorMessage || "Error en el registro");
        return;
      }

      // 3. ÉXITO
      console.log(data);
      alert("Usuario registrado con éxito");
      navigate("/");

    } catch (error) {
      console.error(error);
      setErrorMessage("Error inesperado. Llame a soporte");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 bg-white p-8 rounded-lg shadow-lg
        min-w-[300px] w-[100dvw] sm:w-[70dvw] md:w-[60dvw] lg:w-[50dvw] max-w-[600px]"
        onSubmit={handleSubmit(onValid)}
      >
        <p className="text-2xl font-bold pb-2">Registro de Usuario</p>

        <InputShared
          label="Usuario"
          {...register("username", { required: "Usuario es obligatorio" })}
          error={errors.username?.message}
        />

        <InputShared
          label="Email"
          type="email"
          {...register("email", {
            required: "Email es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email no válido",
            },
          })}
          error={errors.email?.message}
        />

        <div className="flex flex-col h-20">
          <label>Role:</label>
          <select
            className={`border rounded p-2 ${errors.role ? "border-red-400" : "border-gray-300"}`}
            {...register("role", {
              required: "Debe seleccionar un role",
            })}
          >
            <option value="">Seleccione una opción</option>
            <option value="ADMIN">Admin</option>
            <option value="CLIENT">Client</option> 
          </select>
          
          {errors.role && (
            <p className="text-red-500 text-base sm:text-xs">
              {errors.role.message}
            </p>
          )}
        </div>

        <InputShared
          label="Contraseña"
          type="password"
          {...register("password", {
            required: "Contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
          error={errors.password?.message}
        />

        <InputShared
          label="Confirmar contraseña"
          type="password"
          {...register("confirmPassword", {
            required: "Debe confirmar la contraseña",
            validate: (value) =>
              value === password || "Las contraseñas no coinciden",
          })}
          error={errors.confirmPassword?.message}
        />

        <ButtonShared type="submit">Registrar</ButtonShared>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
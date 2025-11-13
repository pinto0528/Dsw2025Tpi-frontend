import { useForm } from "react-hook-form";
import InputShared from "../../shared/components/InputShared";
import ButtonShared from "../../shared/components/ButtonShared";
import { useState } from "react";
// Se asume que tienes un servicio de registro similar al de login
import { registerUser } from "../services/register"; 

function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState("");
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

  // Observamos el valor de 'password' para validación
  const password = watch("password");

  const onValid = async (formData) => {
    try {
      // Llamamos al servicio de registro
      const { data, error } = await registerUser(formData);

      if (error) {
        setErrorMessage(error.frontendErrorMessage);
        return;
      }

      console.log(data);
      
    } catch (error) {
      console.error(error);
      setErrorMessage("Error inesperado. Llame a soporte");
    }
  };

  return (

    <div>


    <form
      className="
        flex
        flex-col
        gap-3
        bg-white
        p-8
        min-w-[400px]
        max-h-[600px]
        sm:w-md
        sm:gap-4
        sm:rounded-lg
        sm:shadow-lg
      "
      onSubmit={handleSubmit(onValid)}
    >
        
    <p className="
        text-2xl
        font-bold
        pb-2
    
    ">Registro de Usuario</p>

      <InputShared
        label="Usuario"
        {...register("username", {
          required: "Usuario es obligatorio",
        })}
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

      {/* Como InputShared es solo para <input>, 
        usamos un div y <select> nativos para el Role,
        replicando el estilo y manejo de error.
      */}
      <div className="flex flex-col h-20">
        <label>Role:</label>
        <select
          className={errors.role ? "border-red-400" : ""}
          {...register("role", {
            required: "Debe seleccionar un role",
          })}
        >
          <option value="">Seleccione una opción</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          {/* Agrega más roles si es necesario */}
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
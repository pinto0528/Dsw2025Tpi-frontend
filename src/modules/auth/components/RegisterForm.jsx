import { useForm } from "react-hook-form";
import InputShared from "../../shared/components/atoms/InputShared";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import { useState } from "react";
import { registerUser } from "../services/register";
import { useNavigate } from "react-router-dom";

const ADMIN_SECRET_KEY = "TPI2025"; 

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
      adminSecret: "",
    },
  });

  const password = watch("password");
  const selectedRole = watch("role"); 

  const onValid = async (formData) => {
    if (formData.role === "ADMIN") {
        if (formData.adminSecret !== ADMIN_SECRET_KEY) {
            setErrorMessage("La clave maestra para crear Administradores es incorrecta.");
            return;
        }
    }

    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role.toUpperCase()
      };

      const { data, error } = await registerUser(payload);

      if (error) {
        setErrorMessage(error.frontendErrorMessage || "Error en el registro");
        return;
      }

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
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 bg-white p-6 rounded-lg shadow-lg
        min-w-[300px] w-[100dvw] sm:w-[70dvw] md:w-[60dvw] lg:w-[50dvw] max-w-[700px]"
        onSubmit={handleSubmit(onValid)}
      >
        <p className="text-2xl font-bold pb-2 md:col-span-2 text-center md:text-left">
          Registro de Usuario
        </p>

        {/* 1. USUARIO: Ocupa las 2 columnas (ancho completo) */}
        <div className="md:col-span-2">
            <InputShared
                label="Usuario"
                {...register("username", { required: "Usuario es obligatorio" })}
                error={errors.username?.message}
            />
        </div>

        {/* 2. EMAIL: Ocupa las 2 columnas (ancho completo) */}
        <div className="md:col-span-2">
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
        </div>

        {/* 3. ROL: Ocupa 1 columna (o 2 si no hay clave maestra y quieres que se estire) */}
        {/* Aquí lo dejo en 1 columna para que haga espacio a la clave maestra si aparece */}
        <div className={`flex flex-col ${selectedRole === 'ADMIN' ? '' : 'md:col-span-2'}`}>
          <label className="mb-1 text-sm font-medium text-gray-700">Role:</label>
          <select
            className={`border rounded p-2 h-[42px] ${errors.role ? "border-red-400" : "border-gray-300"}`}
            {...register("role", {
              required: "Debe seleccionar un role",
            })}
          >
            <option value="">Seleccione una opción</option>
            <option value="CLIENT">Client</option> 
            <option value="ADMIN">Admin</option>
          </select>
          
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">
              {errors.role.message}
            </p>
          )}
        </div>

        {/* 4. CLAVE MAESTRA: Aparece al lado del Rol (columna 2) */}
        {selectedRole === "ADMIN" && (
            <div className="animate-fade-in">
                <InputShared
                    label="Clave Maestra"
                    type="password"
                    placeholder="Clave de autorización"
                    {...register("adminSecret", {
                        required: "Requerido para Admin"
                    })}
                    error={errors.adminSecret?.message}
                    className="bg-yellow-50 border-yellow-200 focus:border-yellow-400"
                />
            </div>
        )}

        {/* 5. CONTRASEÑAS: Comparten fila (1 columna cada una) */}
        <InputShared
          label="Contraseña"
          type="password"
          {...register("password", {
            required: "Obligatoria",
            minLength: {
              value: 6,
              message: "Mínimo 6 caracteres",
            },
          })}
          error={errors.password?.message}
        />

        <InputShared
          label="Confirmar"
          type="password"
          {...register("confirmPassword", {
            required: "Requerido",
            validate: (value) =>
              value === password || "No coinciden",
          })}
          error={errors.confirmPassword?.message}
        />

        {/* BOTÓN: Ancho completo */}
        <div className="md:col-span-2 mt-2">
            <ButtonShared type="submit" className="w-full">
                Registrar
            </ButtonShared>

            {errorMessage && (
                <p className="text-red-500 font-bold text-center mt-2 text-sm">
                    {errorMessage}
                </p>
            )}
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
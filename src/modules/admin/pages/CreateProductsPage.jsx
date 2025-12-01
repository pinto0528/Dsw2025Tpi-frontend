import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // 1. Importamos hook form
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import InputShared from "../../shared/components/atoms/InputShared";
import { createProduct } from "../services/products"; // 2. Importamos el servicio

const CreateProductsPage = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // 3. Configuración del formulario
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (formData) => {
        setIsSubmitting(true);
        setErrorMessage("");

        // 4. Preparamos el objeto para el Backend (Parsear números)
        const payload = {
            sku: formData.sku,
            internalCode: formData.internalCode,
            name: formData.name,
            description: formData.description,
            currentUnitPrice: parseFloat(formData.price), // Convertir a Decimal
            stockQuantity: parseInt(formData.stock, 10)   // Convertir a Int
        };

        const { error } = await createProduct(payload);

        if (error) {
            setErrorMessage(error);
            setIsSubmitting(false);
        } else {
            alert("Producto creado exitosamente");
            navigate(-1); // Volver atrás si todo salió bien
        }
    };

    return (
        <div className="bg-gray-100 rounded-lg p-4 md:p-6 shadow-sm max-w-4xl mx-auto w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Nuevo Producto</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-6">
                
                {/* SKU */}
                <InputShared 
                    className="bg-white" 
                    label="SKU" 
                    placeholder="Ej: MON-001"
                    {...register("sku", { required: "El SKU es obligatorio" })}
                    error={errors.sku?.message}
                />

                {/* Código Interno */}
                <InputShared 
                    className="bg-white" 
                    label="Código único (Interno)" 
                    placeholder="Ej: INT-999"
                    {...register("internalCode", { required: "El código interno es obligatorio" })}
                    error={errors.internalCode?.message}
                />

                {/* Nombre */}
                <InputShared 
                    className="bg-white" 
                    label="Nombre" 
                    placeholder="Nombre del producto"
                    {...register("name", { required: "El nombre es obligatorio" })}
                    error={errors.name?.message}
                />

                {/* Descripción */}
                <InputShared 
                    className="bg-white" 
                    label="Descripción" 
                    placeholder="Detalles del producto..."
                    {...register("description")}
                />

                {/* Precio y Stock en una fila en desktop (opcional, se ve mejor) */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <InputShared 
                            className="bg-white" 
                            label="Precio" 
                            type="number" 
                            step="0.01" // Permitir decimales
                            placeholder="0.00" 
                            {...register("price", { 
                                required: "Requerido", 
                                min: { value: 0, message: "No puede ser negativo" } 
                            })}
                            error={errors.price?.message}
                        />
                    </div>
                    <div className="flex-1">
                        <InputShared 
                            className="bg-white" 
                            label="Stock" 
                            type="number" 
                            placeholder="0" 
                            {...register("stock", { 
                                required: "Requerido", 
                                min: { value: 0, message: "No puede ser negativo" }
                            })}
                            error={errors.stock?.message}
                        />
                    </div>
                </div>
            
                {/* Mensaje de Error General */}
                {errorMessage && (
                    <div className="text-red-500 text-sm font-bold bg-red-50 p-3 rounded">
                        {errorMessage}
                    </div>
                )}

                <div className="flex justify-between mt-2 md:mt-4">
                    <ButtonShared 
                        type="button" 
                        className="shrink-0 w-fit md:w-fit bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2"
                        onClick={() => navigate(-1)}
                        disabled={isSubmitting}
                    >
                        ← Volver
                    </ButtonShared>
                    
                    <ButtonShared 
                        type="submit" 
                        className="w-fit font-medium px-6 py-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Guardando..." : "Crear Producto"}
                    </ButtonShared>
                </div>
            </form>
        </div>
    );
};

export default CreateProductsPage;
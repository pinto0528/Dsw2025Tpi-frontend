import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonShared from "../../shared/components/Atoms/ButtonShared"; 
// Asegúrate de importar tu ButtonShared correctamente

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { sku } = useParams(); // Recuperamos el SKU de la URL (aunque por ahora usaremos datos falsos)

  // --- DATOS FALSOS (MOCK) PARA MAQUETAR ---
  // Esto simula lo que te devolvería la base de datos
  const product = {
    name: "Auriculares Bluetooth Pro X",
    sku: sku || "SKU-999", // Usa el de la url o uno por defecto
    price: 15999.99,
    stock: 45,
    state: "Activo",
    description: "Auriculares de alta fidelidad con cancelación de ruido activa, batería de 20 horas y conexión multipunto. Ideales para trabajo remoto y gaming.",
    category: "Electrónica"
  };

  return (
    // 1. Contenedor principal (El fondo azul/gris ya te lo da el Layout, aquí manejamos el padding)
    <div className="flex flex-col h-full bg-gray-100 p-4 md:p-6 overflow-y-auto">
      
      {/* 2. Encabezado de la página de detalle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-4">
        <div>
           <h1 className="text-xl md:text-2xl font-bold text-gray-800">Detalle del Producto</h1>
           <p className="text-gray-500 text-sm mt-1">Viendo SKU: {product.sku}</p>
        </div>
        <div className="w-full md:w-auto">
            <ButtonShared 
                className="w-full md:w-auto bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 justify-center self-end px-4"
                onClick={() => navigate(-1)}
            >
                ← Volver
            </ButtonShared>
        </div>
      </div>

      {/* 3. Tarjeta Blanca con la información */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 max-w-4xl w-full mx-auto">
        
        {/* SECCIÓN SUPERIOR: Nombre y Badges */}
        {/* Móvil: flex-col (Vertical). Desktop: flex-row (Horizontal) */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-100 pb-6 mb-6 gap-4">
            <div className="w-full">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {product.name}
                </h2>
                {/* Categoría: inline-block para que no ocupe todo el ancho innecesariamente */}
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    {product.category}
                </span>
            </div>

            {/* Estado: En móvil se alinea a la izquierda, en desktop se queda a la derecha por el flex-row del padre */}
            <div className={`
                px-4 py-2 rounded-lg font-bold text-sm md:text-base 
                ${product.state === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
            `}>
                {product.state}
            </div>
        </div>

        {/* GRILLA DE DETALLES */}
        {/* Móvil: grid-cols-1 (1 columna). Desktop: grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
            
            {/* Bloque Izquierdo */}
            <div className="space-y-4 md:space-y-6">
                <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Código SKU</label>
                    <p className="text-base md:text-lg text-gray-900 font-mono bg-gray-50 p-2 rounded w-fit md:bg-transparent md:p-0">
                        {product.sku}
                    </p>
                </div>
                <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Precio Unitario</label>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Bloque Derecho */}
            <div className="space-y-4 md:space-y-6">
                 <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Stock Disponible</label>
                    <p className="text-base md:text-lg text-gray-900 font-medium">
                        {product.stock} unidades
                    </p>
                </div>
            </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="mb-8">
            <label className="block text-xs md:text-sm font-medium text-gray-500 mb-2">Descripción</label>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-sm md:text-base text-gray-700 leading-relaxed border border-gray-100">
                {product.description}
            </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        {/* Móvil: flex-col-reverse (Editar arriba, Eliminar abajo) y w-full */}
        {/* Desktop: flex-row (alineados a la derecha) */}
        <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-6 border-t border-gray-100">
            {/* En móvil, los botones ocupan el 100% del ancho (w-full implícito en flex-col) */}
            <ButtonShared className="w-full md:w-auto bg-red-50 text-red-600 hover:bg-red-100 justify-center">
                Eliminar
            </ButtonShared>
            <ButtonShared className="w-full md:w-auto shadow-md justify-center">
                Editar Producto
            </ButtonShared>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
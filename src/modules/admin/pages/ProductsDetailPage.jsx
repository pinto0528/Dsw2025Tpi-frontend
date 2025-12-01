import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonShared from "../../shared/components/Atoms/ButtonShared"; 
import { getProductById } from "../services/products";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const { data, error } = await getProductById(id);
      if (error) {
        setError(error);
      } else {
        setProduct(data);
      }
      setLoading(false);
    };

    if (id) fetchDetail();
  }, [id]);

  const getStatusInfo = (isActive, stock) => {
      if (!isActive) return { label: 'Inactivo', color: 'bg-gray-200 text-gray-600' };
      if (stock === 0) return { label: 'Agotado', color: 'bg-red-100 text-red-800' };
      if (stock < 10) return { label: 'Poco Stock', color: 'bg-yellow-100 text-yellow-800' };
      return { label: 'Activo', color: 'bg-green-100 text-green-800' };
  };

  if (loading) return <div className="p-8 text-center">Cargando producto...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  if (!product) return <div className="p-8 text-center">Producto no encontrado</div>;

  const statusInfo = getStatusInfo(product.isActive, product.stockQuantity);

  return (
    <div className="flex flex-col h-full bg-gray-100 p-4 md:p-6 overflow-y-auto rounded-lg">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-4">
        <div>
           <h1 className="text-xl md:text-2xl font-bold text-gray-800">Detalle del Producto</h1>
           <p className="text-gray-500 text-sm mt-1">ID: {product.id}</p>
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

      {/* CARD PRINCIPAL */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 max-w-4xl w-full mx-auto">
        
        {/* TITULO Y ESTADO */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-100 pb-6 mb-6 gap-4">
            <div className="w-full">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {product.name}
                </h2>
            </div>

            <div className={`px-4 py-2 rounded-lg font-bold text-sm md:text-base ${statusInfo.color}`}>
                {statusInfo.label}
            </div>
        </div>

        {/* GRILLA DE DATOS */}
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
                    <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Código Interno</label>
                    <p className="text-gray-900">{product.internalCode || '-'}</p>
                </div>
                <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Precio Unitario</label>
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                        ${product.currentUnitPrice?.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Bloque Derecho */}
            <div className="space-y-4 md:space-y-6">
                 <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Stock Disponible</label>
                    <p className="text-base md:text-lg text-gray-900 font-medium">
                        {product.stockQuantity} unidades
                    </p>
                </div>
            </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="mb-8">
            <label className="block text-xs md:text-sm font-medium text-gray-500 mb-2">Descripción</label>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-sm md:text-base text-gray-700 leading-relaxed border border-gray-100">
                {product.description || "Sin descripción"}
            </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-6 border-t border-gray-100">
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
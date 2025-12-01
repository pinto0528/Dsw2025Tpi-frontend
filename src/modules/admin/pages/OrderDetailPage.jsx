import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import { getOrderById } from "../services/orders"; // Importar servicio

const OrderDetailPage = () => {
  const { id } = useParams(); // Usamos 'id' (asegúrate que la ruta sea :id)
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      const { data, error } = await getOrderById(id);
      
      if (error) {
        setError(error);
      } else {
        setOrder(data);
      }
      setLoading(false);
    };

    if (id) fetchDetail();
  }, [id]);

  if (loading) return <div className="p-8 text-center">Cargando orden...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  if (!order) return <div className="p-8 text-center">Orden no encontrada</div>;

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4 md:p-6 overflow-y-auto rounded-lg">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
         <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Orden #{order.id.substring(0, 8).toUpperCase()}
            </h1>
            <p className="text-xs text-gray-400">ID Completo: {order.id}</p>
         </div>
         <ButtonShared 
            className="w-fit md:w-auto bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={() => navigate(-1)}
         >
            ← Volver
         </ButtonShared>
      </div>

      {/* TARJETA DE DETALLE */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 max-w-3xl mx-auto w-full">
        
        {/* Cabecera: Cliente y Estado */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-100 pb-6 mb-6 gap-4">
            <div>
                <p className="text-sm text-gray-500">Cliente ID</p>
                <h2 className="text-md font-bold text-gray-900 break-all">{order.customerId}</h2>
                
                <p className="text-sm text-gray-500 mt-3">Dirección de Envío</p>
                <p className="text-gray-800">{order.shippingAddress}</p>

                {order.notes && (
                    <p className="text-sm text-gray-500 mt-2 bg-yellow-50 p-2 rounded border border-yellow-100">
                        Nota: {order.notes}
                    </p>
                )}
            </div>
            
            <div className="self-start md:self-center">
                {/* El backend no devuelve Status aún, ponemos placeholder */}
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    Procesando
                </span>
            </div>
        </div>

        {/* Lista de Productos */}
        <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4">Items del pedido</h3>
            <div className="border rounded-lg overflow-hidden overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="p-3">Producto ID</th>
                            <th className="p-3 text-right">Cant.</th>
                            <th className="p-3 text-right">Precio U.</th>
                            <th className="p-3 text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {order.orderItems && order.orderItems.map((item) => (
                            <tr key={item.id}>
                                {/* Mostramos ID porque OrderItemResponse no trae nombre */}
                                <td className="p-3 text-gray-800 font-mono text-xs">
                                    {item.productId}
                                </td>
                                <td className="p-3 text-right text-gray-600">x{item.quantity}</td>
                                <td className="p-3 text-right text-gray-600">${item.unitPrice}</td>
                                <td className="p-3 text-right font-medium">${item.subtotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Total Final */}
        <div className="flex justify-end border-t border-gray-100 pt-4">
            <div className="text-right">
                <span className="block text-gray-500 text-sm">Total a Pagar</span>
                <span className="block text-2xl font-bold text-gray-900">
                    ${order.totalAmount}
                </span>
            </div>
        </div>

        {/* Acciones */}
        <div className="flex flex-col md:flex-row justify-end gap-3 mt-8">
             <ButtonShared className="bg-red-50 text-red-600 hover:bg-red-100 justify-center">
                Cancelar Orden
            </ButtonShared>
            <ButtonShared className="bg-blue-600 text-white hover:bg-blue-700 justify-center">
                Actualizar Estado
            </ButtonShared>
        </div>

      </div>
    </div>
  );
};

export default OrderDetailPage;
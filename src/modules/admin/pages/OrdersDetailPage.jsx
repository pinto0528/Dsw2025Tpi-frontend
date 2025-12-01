import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ButtonShared from "../../shared/components/Atoms/ButtonShared";

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // DATOS MOCK (Simulando una orden real)
  const order = {
    id: orderId,
    client: "Juan Pérez",
    date: "01/12/2025",
    status: "Pendiente",
    total: 45000,
    items: [
      { name: "Teclado Mecánico RGB", quantity: 1, price: 30000 },
      { name: "Mouse Pad XL", quantity: 2, price: 7500 },
    ]
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4 md:p-6 overflow-y-auto">
      
      {/* HEADER CON BOTÓN VOLVER */}
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Orden #{order.id}
         </h1>
         <ButtonShared 
            className="w-fit md:w-auto bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={() => navigate(-1)}
         >
            ← Volver
         </ButtonShared>
      </div>

      {/* TARJETA DE DETALLE (ESTILO FACTURA) */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 max-w-3xl mx-auto w-full">
        
        {/* Cabecera de la Orden: Cliente y Estado */}
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-100 pb-6 mb-6 gap-4">
            <div>
                <p className="text-sm text-gray-500">Cliente</p>
                <h2 className="text-xl font-bold text-gray-900">{order.client}</h2>
                <p className="text-sm text-gray-500 mt-1">Fecha: {order.date}</p>
            </div>
            <div className="self-start md:self-center">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                    {order.status}
                </span>
            </div>
        </div>

        {/* Lista de Productos Comprados */}
        <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4">Items del pedido</h3>
            <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="p-3">Producto</th>
                            <th className="p-3 text-right">Cant.</th>
                            <th className="p-3 text-right">Precio</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {order.items.map((item, index) => (
                            <tr key={index}>
                                <td className="p-3 text-gray-800">{item.name}</td>
                                <td className="p-3 text-right text-gray-600">x{item.quantity}</td>
                                <td className="p-3 text-right font-medium">${item.price * item.quantity}</td>
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
                <span className="block text-2xl font-bold text-gray-900">${order.total}</span>
            </div>
        </div>

        {/* Acciones */}
        <div className="flex flex-col md:flex-row justify-end gap-3 mt-8">
             <ButtonShared className="bg-red-50 text-red-600 hover:bg-red-100 justify-center">
                Cancelar Orden
            </ButtonShared>
            <ButtonShared className="bg-blue-600 text-white hover:bg-blue-700 justify-center">
                Marcar como Enviado
            </ButtonShared>
        </div>

      </div>
    </div>
  );
};

export default OrderDetailPage;
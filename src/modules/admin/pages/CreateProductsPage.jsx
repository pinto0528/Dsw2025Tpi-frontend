import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import InputShared from "../../shared/components/Atoms/InputShared";
import { useNavigate } from "react-router-dom";

const CreateProductsPage = () => {
    const navigate = useNavigate();
    
    // 1. Crea esta función para manejar el envío
    const handleSubmit = (e) => {
        e.preventDefault(); // <--- ESTO ES LA CLAVE. Evita que la página se recargue.
        console.log("Enviando formulario...");
        // Aquí iría tu lógica para guardar en la DB más adelante
    };
    return (
        <div className = "bg-white rounded-lg p-4 md:p-6 shadow-sm max-w-4xl mx-auto w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
                <InputShared label="SKU" placeholder="" />
                <InputShared label="Código único" placeholder="" />
                <InputShared label="Nombre" placeholder="" />
                <InputShared label="Descripción" placeholder="" />
                <InputShared label="Precio" type="number" placeholder="0.00" />
                <InputShared label="Stock" type="number" placeholder="0" />
            
                <div className="flex justify-between mt-2 md:mt-4">
                    <ButtonShared 
                        type="button" className="shrink-0 w-fit md:w-fit bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2"
                        onClick={() => navigate(-1)}
                    >
                        ← Volver
                    </ButtonShared>
                    <ButtonShared type="submit" className="w-fit font-medium px-6 py-2 ">
                            Crear Producto
                    </ButtonShared>
                </div>
            </form>
        </div>
    );
};
export default CreateProductsPage;
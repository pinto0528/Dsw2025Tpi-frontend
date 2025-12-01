import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import InputShared from "../../shared/components/Atoms/InputShared";
import { useNavigate } from "react-router-dom";

const CreateProductsPage = () => {
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(-1);
    };
    return (
        <div className = "bg-gray-100 rounded-lg p-4 md:p-6 shadow-sm max-w-4xl mx-auto w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
                <InputShared className="bg-white" label="SKU" placeholder="" />
                <InputShared className="bg-white" label="Código único" placeholder="" />
                <InputShared className="bg-white" label="Nombre" placeholder="" />
                <InputShared className="bg-white" label="Descripción" placeholder="" />
                <InputShared className="bg-white" label="Precio" type="number" placeholder="0.00" />
                <InputShared className="bg-white" label="Stock" type="number" placeholder="0" />
            
                <div className="flex justify-between mt-2 md:mt-4">
                    <ButtonShared 
                        type="button" className="shrink-0 w-fit md:w-fit bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2"
                        onClick={() => navigate(-1)}
                    >
                        ← Volver
                    </ButtonShared>
                    <ButtonShared type="submit" className="w-fit font-medium px-6 py-2 "
                    onClick={handleSubmit}>
                            Crear Producto
                    </ButtonShared>
                </div>
            </form>
        </div>
    );
};
export default CreateProductsPage;
import ButtonShared from "../../shared/components/Atoms/ButtonShared";
import InputShared from "../../shared/components/Atoms/InputShared";

const CreateProductsPage = () => {
    return (
        <div className = "bg-white p-6 rounded-lg shadow-md m-6 h-auto">
            <form className="flex flex-col gap-4">
                <InputShared label="SKU" placeholder="" />
                <InputShared label="Código único" placeholder="" />
                <InputShared label="Nombre" placeholder="" />
                <InputShared label="Descripción" placeholder="" />
                <InputShared label="Precio" type="number" placeholder="" />
                <InputShared label="Stock" type="number" placeholder="" />
            
                <ButtonShared className="px-5 self-end w-fit">
                    Crear Producto
                </ButtonShared>
            </form>
        </div>
    );
};
export default CreateProductsPage;
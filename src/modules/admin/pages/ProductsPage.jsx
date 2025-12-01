import ButtonShared from "../../shared/components/atoms/ButtonShared";
import SearchBar from "../../shared/components/DashboardSearchBar";
import ProductCard from "../components/DashboardProductCard";

// --- Datos de Ejemplo ---
const mockProducts = [
  {
    sku: "001",
    name: "Nombre de Producto Uno",
    stock: 150,
    state: "Activo",
  },
  { sku: "002", name: "Nombre de Producto Dos", stock: 0, state: "Agotado" },
  {
    sku: "003",
    name: "Nombre de Producto Tres",
    stock: 75,
    state: "Activo",
  },
  {
    sku: "004",
    name: "Nombre de Producto Cuatro",
    stock: 20,
    state: "Poco Stock",
  },
];

const productSearchOptions = [
  { value: "", label: "Estado" },
  { value: "todos", label: "Todos" },
  { value: "activo", label: "Activo" },
  { value: "inactivo", label: "Inactivo" },
  { value: "stockBajo", label: "Stock Bajo" },
];

const ProductsPage = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto p-6">
      <div
        className="
        flex
        flex-col
        bg-gray-100
        rounded-lg
        p-4
        mb-2
      "
      >
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Productos</h1>
          
          <ButtonShared className = "w-fit">Crear Producto</ButtonShared>
        </div>

        <div className="">
          <SearchBar mockOptions={productSearchOptions} />
        </div>
      </div>

      <div
        className="
        flex
        flex-col
        flex-1
        bg-gray-100
        rounded-lg
        p-4
        shadow-sm
      "
      >
        <div className="flex flex-col space-y-3">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.sku}
              sku={product.sku}
              name={product.name}
              stock={product.stock}
              state={product.state}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

import SearchBar from "../../shared/components/AdminSearchBar";
import ProductCard from "../components/ProductCard";

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
    <div className="flex flex-col flex-1">
      <div
        className="
        flex
        flex-col
        mb-2
        bg-gray-100
        rounded-lg
        p-4
      "
      >
        <h1 className="text-2xl font-bold">Productos</h1>

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
        overflow-y-auto
        mb-2
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

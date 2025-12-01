import React, { useEffect, useState } from "react";
import SearchBar from "../../shared/components/DashboardSearchBar";
import { getAllProducts } from "../services/products";
// Importamos el nuevo componente
import DashboardProductItem from "../components/DashboardProductItem";

const productSearchOptions = [
  { value: "", label: "Estado" },
  { value: "todos", label: "Todos" },
];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await getAllProducts();
      
      if (error) {
        setError(typeof error === 'string' ? error : "Error al cargar productos");
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col bg-gray-100 rounded-lg p-4 mb-2">
        <h1 className="text-2xl font-bold">Productos</h1>
        <SearchBar mockOptions={productSearchOptions} />
      </div>

      <div className="flex flex-col flex-1 bg-gray-100 rounded-lg p-4 shadow-sm overflow-y-auto">
        
        {loading && <p className="text-center mt-10 text-gray-500">Cargando...</p>}
        {error && <p className="text-center mt-10 text-red-500">{error}</p>}

        <div className="flex flex-col space-y-2">
          {!loading && products.map((p) => (
            <DashboardProductItem 
              key={p.id}
              name={p.name}
              sku={p.sku}
              stock={p.stockQuantity} // Ojo con el nombre de la propiedad del backend
              price={p.currentUnitPrice}
              isActive={p.isActive}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProductsPage;
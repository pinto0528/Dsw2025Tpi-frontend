import React, { useEffect, useState } from "react";
import SearchBar from "../../shared/components/DashboardSearchBar";
import { getAllProducts } from "../services/products";

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
        setError(error);
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
        
        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-col space-y-2">
          {!loading && products.map((p) => (
            <p key={p.id} className="bg-white p-2 border rounded">
              <strong>{p.name}</strong> | SKU: {p.sku} | Stock: {p.stockQuantity} | Precio: ${p.currentUnitPrice}
            </p>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProductsPage;
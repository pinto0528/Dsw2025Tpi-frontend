function ProductCard({ product, image, onAddToCart, quantity }) {
  return (
    <div className="bg-white p-4 shadow-sm rounded-lg mb-4 w-[40dvw] sm:w-[20dvw] lg:w-[15dvw] h-60">
      <div className="border border-amber-400">
        <img
          src={image}
          alt={product.name}
          className="w-32 h-32 object-cover mb-2"
        />
      </div>
      <div className="overflow-clip h-6 border border-amber-800">
        <h2 className="text-[1rem] font-semibold">{product.name}</h2>
      </div>
      <div className="border border-y-teal-500"> 
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

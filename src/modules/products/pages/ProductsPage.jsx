import SearchBar from "../../shared/components/SearchBar"

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
        <SearchBar/>
      </div>
      <div
        className="
        flex
        flex-col
        flex-1
        mb-2
        bg-gray-100
        rounded-lg
        p-4
      "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum
        repellat, soluta molestias natus est ipsum rerum tempora explicabo quae.
        Animi odit quisquam iste quo placeat, laborum, neque natus ut aspernatur
        amet a? Ex, architecto officia molestiae, eum possimus beatae in, facere
        reiciendis aspernatur porro expedita obcaecati veniam consectetur
        officiis autem ea veritatis natus accusantium nesciunt excepturi. Saepe,
        animi magnam. Mollitia vel qui, dolor non modi dolores voluptatum animi
        reprehenderit recusandae vitae at nostrum numquam ipsum eligendi ullam
        consequatur officiis. Consequuntur quia eius incidunt ea laboriosam,
        doloremque nulla deserunt natus! Autem eos incidunt sint blanditiis
        excepturi earum sed dolores perspiciatis!
      </div>
    </div>
  );
};

export default ProductsPage;

import ButtonShared from "./ButtonShared";

const SearchBar = () => {
  return (
    <div>
      <div className="flex w-full py-5">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar"
            className="
            w-full
            border border-gray-300
            rounded-lg
            px-2
          "
          />
        </div>

        <div
          className="
          flex flex-row
          w-[38px]
          h-[38px]
          ml-2
          "
        >
          <ButtonShared className="">⌕</ButtonShared>
        </div>
      </div>

      <div
        className="
      w-full
      "
      >
        <select
          className="
        w-full
        border border-gray-300
        rounded-lg
        p-2
        "
        >
          <option value="todos">Estado</option>
          <option value="todos">Todos</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="stockBajo">Stock Bajo</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;

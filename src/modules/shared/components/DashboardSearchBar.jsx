import React from "react";
import ButtonShared from "./Atoms/ButtonShared";

const SearchBar = ({ mockOptions = [] }) => {
  return (
    <div className="flex w-full flex-col sm:flex-row sm:items-center">
      <div className="flex w-full py-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Buscar"
            className="
                  w-full
                  border border-gray-300
                  rounded-lg
                  px-4
                  h-11
                  py-2
                "
          />
        </div>

        <div className=" flex flex-row w-[38px] h-[38px] ml-2">
          <ButtonShared className="">⌕</ButtonShared>
        </div>
      </div>
      <div className=" flex w-full sm:w-[20dvw] h-11">
        <select
          className="
                flex
                w-full
                sm:mx-2
                border border-gray-300
                rounded-lg
                p-2
                px-4
                "
        >
          {mockOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;

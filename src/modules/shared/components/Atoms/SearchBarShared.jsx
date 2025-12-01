import ButtonShared from "../Atoms/ButtonShared";

function SearchBarShared() {
  return (
    <div className="flex flex-row items-center">
      <input className="w-[20dvw] sm:w-sm h-[36px] border border-gray-300">
      </input>
      <div className="w-[36px] h-[36px] mx-2">
        <ButtonShared>⌕</ButtonShared>
      </div>
    </div>
  );
}

export default SearchBarShared;

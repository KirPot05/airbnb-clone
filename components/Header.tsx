import Image from "next/image";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div className="relative flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          className="object-contain object-left"
          alt=""
        />
      </div>

      <div className="flex items-center space-x-2 rounded-full border-2 p-2 shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow bg-transparent pl-4 outline-none"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:inline-flex" />
      </div>

      <div></div>
    </header>
  );
}

export default Header;

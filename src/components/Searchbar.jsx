import React from "react";

import filterLines from "../assets/filter-lines.svg";

import searchImg from "../assets/search.svg";
const Searchbar = () => {
  return (
    <div className="mt-4 flex justify-between w-[100%]">
      <div className="relative  w-[85%]">
        <input
          type="text"
          placeholder="Search anything"
          className="bg-gray-200 text-gray-800 border border-gray-300 rounded-lg py-4 px-4 pl-10 pr-7 block w-full appearance-none leading-5 focus:outline-none "
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={searchImg} alt="search icon" />
        </div>
      </div>
      <div className="bg-black w-12 aspect-square rounded-lg grid place-items-center">
        <img src={filterLines} alt="filter btn" />
      </div>
    </div>
  );
};

export default Searchbar;

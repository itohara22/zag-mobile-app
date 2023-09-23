import React from "react";

import bellImg from "../assets/bell.svg";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <span className="text-4xl font-bold">Discover</span>
      <span className="self-center">
        <img className="aspect-square w-6" src={bellImg} alt="bell icon" />
      </span>
    </div>
  );
};

export default Header;

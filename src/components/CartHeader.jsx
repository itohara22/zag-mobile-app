import React from "react";
import { Link } from "react-router-dom";

import arrowImg from "../assets/arrow.svg";
import bellImg from "../assets/bell.svg";

const CartHeader = () => {
  return (
    <div className="flex justify-between mb-6">
      <Link to="/" className="self-center">
        <img className="w-6" src={arrowImg} alt="back btn" />
      </Link>
      <span className="text-2xl font-semibold">Cart</span>
      <span className="self-center">
        <img className="w-6" src={bellImg} alt="bell image" />
      </span>
    </div>
  );
};

export default CartHeader;

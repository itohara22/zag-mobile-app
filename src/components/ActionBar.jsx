import React from "react";
import { useNavigate } from "react-router-dom";

import shoppingBagImg from "../assets/shopping-bag-03.svg";

const ActionBar = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white fixed mx-auto inset-x-0 max-w-[390px] bottom-0 h-20 border-gray-400 border-t-[1px] grid grid-cols-2 place-items-center">
      <div>
        <label htmlFor="price">Price</label>
        <div id="price" className="text-xl font-bold">
          INR {product.price * 10}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            addToCart(product);
            navigate("/cart");
          }}
          className="bg-black text-white py-4 px-6 rounded-lg flex gap-2"
        >
          Add to Cart
          <img className="invert" src={shoppingBagImg} alt="shoppping cart" />
        </button>
      </div>
    </div>
  );
};

export default ActionBar;

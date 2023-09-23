import React from "react";

const CartActionBar = () => {
  return (
    <div className="bg-white fixed mx-auto inset-x-0 max-w-[390px] bottom-0 h-20 border-gray-400 border-t-[1px] grid place-items-center">
      <button className="text-white w-[90%] h-10 rounded-md bg-black">
        Checkout
      </button>
    </div>
  );
};

export default CartActionBar;

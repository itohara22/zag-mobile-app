import React from "react";

const CartCard = ({ item, quantity, addToCart, removeFromCart }) => {
  return (
    <div className="w-[90%] h-28 p-2 rounded-lg bg-gray-200 flex gap-2">
      <img
        className="object-cover h-full"
        src={item.images[0]}
        alt="product image"
      />
      <div className="w-full flex justify-between">
        <div>
          <p className="capitalize">{item.title}</p>
          <p className="text-sm text-gray-700">size</p>
          <p className="mt-4 text-2xl">INR {item.price * quantity * 10}</p>
        </div>
        <div className="w-16 flex justify-between items-center">
          <button
            className="font-bold aspect-square w-4 rounded-lg bg-gray-400"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </button>
          <span className="bg-white px-2 rounded-md">{quantity}</span>
          <button
            className="font-bold aspect-square w-4 rounded-lg bg-gray-400 "
            onClick={() => addToCart(item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

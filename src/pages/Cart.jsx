import React from "react";
import CartHeader from "../components/CartHeader";
import CartCard from "../components/CartCard";
import CartActionBar from "../components/CartActionBar";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  let totalAmount = 0;
  const shippingFee = 80;
  cart?.map((item) => {
    totalAmount += item.product.price * item.quantity;
  });

  console.log(cart);
  const grandTotal = totalAmount * 10 + shippingFee;
  return (
    <div className="w-full max-w-[415px] pt-4 h-[calc(100vh-5rem)]">
      <CartHeader />
      <div className="grid grid-flow-row gap-2 h-[45vh] overflow-y-scroll">
        {cart.map((item, index) => {
          return (
            <CartCard
              key={index}
              item={item.product}
              quantity={item.quantity}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
      <input
        className="mt-4 w-full px-1 py-2 bg-gray-200 rounded-md"
        type="text"
        name="voucher"
        id="voucher"
        placeholder="Voucher"
      />
      <div className="mt-2">
        <span className="flex justify-between">
          <p className="text-xs text-gray-700">Sub-Total</p>
          <p className="font-semibold text-sm">INR {totalAmount * 10}</p>
        </span>
        <span className="flex justify-between">
          <p className="text-xs text-gray-700">VAT(%)</p>
          <p className="font-semibold text-sm">INR 0</p>
        </span>
        <span className="flex justify-between">
          <p className="text-xs text-gray-700">Shipping Fee</p>
          <p className="font-semibold text-sm">INR {shippingFee}</p>
        </span>
        <div className="mt-2 py-2 flex justify-between border-gray-800 border-t">
          <span className="font-semibold">Grand Total</span>
          <span className="font-semibold">INR {grandTotal}</span>
        </div>
      </div>
      <CartActionBar />
    </div>
  );
};

export default Cart;

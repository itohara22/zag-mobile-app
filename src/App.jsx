import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.product.id === productId
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      const updatedQuantity = updatedCart[existingCartItemIndex].quantity - 1;

      if (updatedQuantity >= 1) {
        updatedCart[existingCartItemIndex].quantity = updatedQuantity;
      } else {
        // Remove the item from the cart if the quantity reaches zero
        updatedCart.splice(existingCartItemIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  console.log(cart);
  return (
    <div className="mx-auto w-[100vw] max-w-[415px] pt-10 px-5 ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

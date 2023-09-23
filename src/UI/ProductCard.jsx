import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="w-[10rem] h-[15rem] product_grid"
    >
      <img
        className="object-cover object-top h-full w-full rounded-xl"
        src={product.images[0]}
        alt="product image"
      />
      <div>
        <h4 className="font-bold text-">{product.title}</h4>
        <span className="text-sm">{`INR ${product.price * 10}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;

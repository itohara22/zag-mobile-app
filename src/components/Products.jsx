import React from "react";
import ProductCard from "../UI/Productcard";

const Products = ({ products }) => {
  return (
    <div className="mt-6 mx-auto w-fit grid grid-cols-2 gap-6">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;

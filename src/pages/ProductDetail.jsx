import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailHeader from "../components/DetailHeader";
import ActionBar from "../components/ActionBar";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImgSrc(data.images[0]);
      });
  }, []);

  return (
    <div className="w-full max-w-[415px] h-screen pt-4 bg-white">
      <DetailHeader />
      <div className="mx-auto grid place-items-center w-ful">
        <img
          className="object-cover object-top w-[21rem]"
          src={imgSrc}
          alt="product image"
        />
        <section className="mt-4">
          <div className="font-bold text-lg">{product.title}</div>
          <p className="text-md">{product.description}</p>
        </section>
      </div>
      <ActionBar product={product} addToCart={addToCart} />
    </div>
  );
};

export default ProductDetail;

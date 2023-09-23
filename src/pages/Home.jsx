import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Navbar from "../components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Searchbar />
      <Categories />
      <Products products={products} />
    </>
  );
};

export default Home;

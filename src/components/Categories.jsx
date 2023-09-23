import React from "react";

import CategoryCard from "../UI/CategoryCard";

const Categories = () => {
  const categories = ["All", "Men", "Women", "kids"];

  return (
    <div className="mt-4 flex gap-2 overflow-x-scroll">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default Categories;

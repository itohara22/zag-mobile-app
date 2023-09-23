import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-gray-200 px-8 py-2 rounded-xl  grid place-items-center">
      {category}
    </div>
  );
};

export default CategoryCard;

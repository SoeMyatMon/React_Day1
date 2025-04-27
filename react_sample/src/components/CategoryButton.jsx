import React from "react";

const CategoryButton = ({ category_name }) => {
  return (
    <button className="text-nowrap border border-gray-400 text-black rounded py-2 px-4 mr-2 mt-2 hover:bg-gray-200 transition duration-300 ease-in-out">
      {category_name}
    </button>
  );
};

export default CategoryButton;

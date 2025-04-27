import React from "react";

const CategoryButton = ({ category_name, current }) => {
  console.log(category_name, current);
  return (
    <button
      className={` ${current && "bg-black text-white"}       
         border border-gray text-nowrap py-2 px-4 mr-2 mt-2 hover:bg-gray-200`}
    >
      {category_name}
    </button>
  );
};
export default CategoryButton;

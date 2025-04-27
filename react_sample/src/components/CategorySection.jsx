import React from "react";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = ["Electronics", "Books", "Clothing", "Toys", "Sports"];

  return (
    <section id="category-section" className="p-5">
      <p className="text-sm font-bold">{title}</p>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            className="border border-gray-400 text-black rounded py-2 px-4 mr-2 mt-2 hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

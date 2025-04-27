import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "All",
    "Electronics",
    "Books",
    "Clothing",
    "Toys",
    "Sports",
  ];

  return (
    <section id="category-section" className="p-5">
      <p className="text-sm font-bold">{title}</p>
      <div className="flex overflow-auto">
        {categories.map((category) => (
          <CategoryButton key={category} category_name={category} />
        ))}
      </div>
    </section>
  );
};
export default CategorySection;

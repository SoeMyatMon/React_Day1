import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section id="category-section" className="p-5">
      <p className="text-sm font-bold">{title}</p>
      <div className="flex overflow-scroll category_btn_hidescrollbar">
        <CategoryButton category_name="All" current={true} />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category_name={category}
            current={false}
          />
        ))}
      </div>
    </section>
  );
};
export default CategorySection;

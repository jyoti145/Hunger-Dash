import React from "react";
import GroceryItem from "./GroceryItem";

const GroceryCategory = ({ category }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {category.items.map((item) => (
        <GroceryItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default GroceryCategory;
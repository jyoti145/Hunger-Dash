import React from "react";

const GroceryItem = ({ item }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
    <img
      src={item.image}
      alt={item.name}
      className="w-24 h-24 object-cover rounded-full mb-3 border"
    />
    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{item.name}</h3>
    <span className="text-orange-500 font-bold text-lg mb-2">₹{item.price}</span>
    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-bold transition">
      Add
    </button>
  </div>
);

export default GroceryItem;
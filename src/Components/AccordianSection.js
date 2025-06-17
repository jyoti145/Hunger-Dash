import { on } from "process";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
const vegIcon = (
  <span className="inline-block w-4 h-4 border-2 border-green-600 rounded-sm mr-2 align-middle">
    <span className="block w-2 h-2 bg-green-600 rounded-sm m-auto mt-1"></span>
  </span>
);
const nonVegIcon = (
  <span className="inline-block w-4 h-4 border-2 border-red-600 rounded-sm mr-2 align-middle">
    <span className="block w-2 h-2 bg-red-600 rounded-sm m-auto mt-1"></span>
  </span>
);

const AccordionSection = ({ title, items, open , onClick}) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="mb-4 border rounded">
      <button
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-left"
        onClick={onClick}
      >
        <span className="black font-bold">
          {title} <span className="text-black font-bold">({items.length})</span>
        </span>
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="p-4 bg-gray-50">
          {items.map((item) => (
            <div key={item.id} className="flex items-center mb-6 border-b last:border-b-0 border-gray-200 pb-4">
                
              <div className="flex-1 pr-4">
                <div className="flex items-center mb-1">
                 
                  {item.itemAttribute?.vegClassifier === "NONVEG" ? nonVegIcon : vegIcon}
               
                  {item.isBestseller && (
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded mr-2">
                      Bestseller
                    </span>
                  )}
                </div>
                <div className="font-bold text-black text-base mb-1">{item.name}</div>
                <div className="text-gray-800 font-semibold mb-1">
                  ₹{item.price ? item.price / 100 : (item.defaultPrice ? item.defaultPrice / 100 : "N/A")}
                </div>
              
                {item.ratings?.aggregatedRating?.rating && (
                  <div
                    className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${
                      Number(item.ratings.aggregatedRating.rating) >= 4
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.ratings.aggregatedRating.rating} ★
                  </div>
                )}
              </div>
     
              <div className="flex flex-col items-center min-w-[110px]">
                <img
                  src={
                    item.imageId
                      ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
                      : "https://dummyimage.com/100x80/cccccc/000000&text=No+Image"
                  }
                  alt={item.name}
                  className="w-20 h-16 object-cover rounded border mb-2"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full font-bold text-xs shadow"
                onClick={() => handleClick(item)}>
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
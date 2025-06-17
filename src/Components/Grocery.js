import React, { useState } from "react";
import GroceryCategory from "./GroceryCategory";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg",
    items: [
      { id: 101, name: "Banana (1 Dozen)", price: 40, image: "https://www.bbassets.com/media/uploads/p/l/40179390_8-fresho-baby-banana-robusta.jpg" },
      { id: 102, name: "Tomato (1 Kg)", price: 30, image: "https://www.jiomart.com/images/product/original/590003517/tomato-1-kg-product-images-o590003517-p590003517-0-202408091800.jpg?im=Resize=(420,420)" },
      { id: 103, name: "Potato (1 Kg)", price: 25, image: "https://static.toiimg.com/thumb/imgsize-23456,msid-110970100,width-600,resizemode-4/110970100.jpg" },
    ],
  },
  {
    id: 2,
    name: "Dairy & Bakery",
    image: "https://www.defactoinfotech.com/Chanakya_CustomerStory.png",
    items: [
      { id: 201, name: "Amul Milk (1L)", price: 60, image: "https://www.bbassets.com/media/uploads/p/l/40090894_6-amul-taaza.jpg" },
      { id: 202, name: "Bread (400g)", price: 35, image: "https://insanelygoodrecipes.com/wp-content/uploads/2022/08/Assorted-Bread-in-a-Basket-and-Wooden-Cutting-Board.jpg" },
      { id: 203, name: "Butter (100g)", price: 55, image: "https://as1.ftcdn.net/v2/jpg/02/10/30/54/1000_F_210305493_vSBsVrBRyJvLBR5JLKmISAEy3xjfcERN.jpg" },
    ],
  },
  {
    id: 3,
    name: "Snacks & Beverages",
    image: "https://m.media-amazon.com/images/I/51ZhRqNPWRL._SX300_SY300_QL70_FMwebp_.jpg",
    items: [
      { id: 301, name: "Lays Chips", price: 20, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/5d98545606daa412acde5af25ae3e174" },
      { id: 302, name: "Coca Cola (750ml)", price: 40, image: "https://www.shutterstock.com/shutterstock/photos/2534402125/display_1500/stock-photo-yogyakarta-indonesia-oct-coca-cola-is-one-of-people-favourite-drink-in-the-world-2534402125.jpg" },
      { id: 303, name: "Oreo Biscuits", price: 30, image: "https://m.media-amazon.com/images/I/419KpnYaQvL._SX300_SY300_QL70_FMwebp_.jpg" },
    ],
  },
];

const Grocery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">GroceryMart
      </h1>
      <div className="flex flex-wrap gap-6 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`flex flex-col items-center p-4 rounded-xl shadow transition border-2 ${
              selectedCategory.id === cat.id
                ? "border-orange-500 bg-orange-50"
                : "border-transparent bg-white hover:border-orange-300"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            <img src={cat.image} alt={cat.name} className="w-20 h-20 object-cover mb-2 rounded-full" />
            <span className="font-semibold text-gray-700">{cat.name}</span>
          </button>
        ))}
      </div>
      <GroceryCategory category={selectedCategory} />
    </div>
  );
};

export default Grocery;
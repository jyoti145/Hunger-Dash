
// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantmenu";
// import {useParams} from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantmenu";

// const RestaurantMenu = () => {
  
//   const {resId} = useParams();
// const Resinfo = useRestaurantMenu(resId);

//   if (Resinfo === null) return <Shimmer />;

//   const { name, cuisines, city, avgRating, costForTwoMessage, cloudinaryImageId } =
//     Resinfo?.cards[2]?.card?.card?.info || {};

//   const restaurantImage = cloudinaryImageId
//     ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
//     : "https://dummyimage.com/400x200/cccccc/000000&text=No+Image";

//   const menuCards =
//     Resinfo?.cards
//       ?.find(card => card.groupedCard)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const menuItems = menuCards
//     .map(section => section.card?.card?.itemCards)
//     .filter(Boolean)
//     .flat()
//     .map(itemCard => itemCard.card?.info)
//     .filter(Boolean);

//     const uniqueMenuItems = Array.from(
//     new Map(menuItems.map(item => [item.id, item])).values()
//   );

//   return (
//     <div className="menu-container">
//       <div className="restaurant-info">
//         <img src={restaurantImage} alt={name} className="restaurant-banner" />
//         <div className="restaurant-details">
//           <h1>{name}</h1>
//           <div className="restaurant-meta">
//             <span>{cuisines?.join(", ") || "N/A"}</span>
//             <span>• {city}</span>
//             <span>• ⭐ {avgRating}</span>
//             <span>• {costForTwoMessage}</span>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <h2 className="menu-title">Menu</h2>
//       <div className="menu-list">
//         {uniqueMenuItems
//         .filter(item => item.imageId)
//         .map((item,index) => (
//           <div className="menu-item-card" key={`${item.id}-${index}`}>
//             <div className="menu-item-info">
//               <h3>{item.name}</h3>
//               <div className="menu-item-meta">
//                 <span className="menu-item-price">
//                   ₹{item.price ? item.price / 100 : (item.defaultPrice ? item.defaultPrice / 100 : "N/A")}
//                 </span>
//                 {item.description && (
//                   <div className="menu-item-desc">{item.description || "No description available"}</div>
//                 )}
//               </div>
//             </div>
//             <div className="menu-item-img-wrap">
//               <img
//                 className="menu-item-img"
//                 src={
//                   item.imageId
//                     ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
//                     : "https://dummyimage.com/100x80/cccccc/000000&text=No+Image"
//                 }
//                 alt={item.name}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;

// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantmenu";
// import { useParams } from "react-router-dom";
// import AccordionSection from "./AccordionSection";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const Resinfo = useRestaurantMenu(resId);

//   if (Resinfo === null) return <Shimmer />;

//   const { name, cuisines, city, avgRating, costForTwoMessage, cloudinaryImageId } =
//     Resinfo?.cards[2]?.card?.card?.info || {};

//   const restaurantImage = cloudinaryImageId
//     ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
//     : "https://dummyimage.com/400x200/cccccc/000000&text=No+Image";

//   const menuCards =
//     Resinfo?.cards
//       ?.find(card => card.groupedCard)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//    const menuSections = menuCards
//     .map(section => section.card?.card)
//     .filter(card => card && card.title && card.itemCards && card.itemCards.length > 0)
//     .map(card => ({
//       title: card.title,
//       items: card.itemCards.map(itemCard => itemCard.card?.info).filter(Boolean),
//     }));


//   const uniqueMenuItems = Array.from(
//     new Map(menuSections.map(item => [item.id, item])).values()
//   );

//   return (
//     <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-10 p-6">
//       <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
//         <img
//           src={restaurantImage}
//           alt={name}
//           className="w-full md:w-72 h-44 object-cover rounded-lg shadow"
//         />
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold text-orange-500 mb-2">{name}</h1>
//           <div className="flex flex-wrap gap-2 text-gray-600 mb-2">
//             <span>{cuisines?.join(", ") || "N/A"}</span>
//             <span>• {city}</span>
//             <span>• <span className="text-orange-500 font-semibold">★ {avgRating}</span></span>
//             <span>• {costForTwoMessage}</span>
//           </div>
//         </div>
//       </div>
//       <hr className="my-6" />
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
//       <div className="grid gap-6">
//         {uniqueMenuItems
//           .filter(item => item.imageId)
//           .map((item, index) => (
//             <div
//               className="flex items-center bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition p-4"
//               key={`${item.id}-${index}`}
//             >
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                 <div className="flex flex-wrap items-center gap-2 text-gray-700 text-sm mb-1">
//                   <span className="font-semibold text-orange-500">
//                     ₹{item.price ? item.price / 100 : (item.defaultPrice ? item.defaultPrice / 100 : "N/A")}
//                   </span>
//                 </div>
//                 {item.description && (
//                   <div className="text-gray-500 text-sm">{item.description}</div>
//                 )}
//               </div>
//               <div className="ml-4 flex-shrink-0">
//                 <img
//                   className="w-24 h-20 object-cover rounded-md border"
//                   src={
//                     item.imageId
//                       ? `https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`
//                       : "https://dummyimage.com/100x80/cccccc/000000&text=No+Image"
//                   }
//                   alt={item.name}
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
import React from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import { useParams } from "react-router-dom";
import AccordionSection  from "./AccordianSection";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  const Resinfo = useRestaurantMenu(resId);  
     const [openIndex, setOpenIndex] = useState(0);    
    


  if (Resinfo === null) return <Shimmer />;

  const { name, cuisines, city, avgRating, costForTwoMessage, cloudinaryImageId } =
    Resinfo?.cards[2]?.card?.card?.info || {};

  const restaurantImage = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : "https://dummyimage.com/400x200/cccccc/000000&text=No+Image";

  const menuCards =
    Resinfo?.cards
      ?.find(card => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  
  const menuSections = menuCards
    .map(section => section.card?.card)
    .filter(card => card && card.title && card.itemCards && card.itemCards.length > 0)
    .map(card => ({
      title: card.title,
      items: card.itemCards.map(itemCard => itemCard.card?.info).filter(Boolean),
    }));

    

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-10 p-6">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={restaurantImage}
          alt={name}
          className="w-full md:w-72 h-44 object-cover rounded-lg shadow"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-orange-500 mb-2">{name}</h1>
          <div className="flex flex-wrap gap-2 text-gray-600 mb-2">
            <span>{cuisines?.join(", ") || "N/A"}</span>
            <span>• {city}</span>
            <span>• <span className="text-orange-500 font-semibold">★ {avgRating}</span></span>
            <span>• {costForTwoMessage}</span>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
      <div>
        {menuSections.map((section, idx) => (
          <AccordionSection
            key={section.title}
            title={section.title}
            items={section.items}
             open={openIndex === idx}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
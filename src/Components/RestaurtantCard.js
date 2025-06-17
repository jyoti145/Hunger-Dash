
const RestaurantCard = (props) => {
  const { resname } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = resname;

  const slaString = sla?.slaString;
  const discountText = aggregatedDiscountInfoV3
    ? aggregatedDiscountInfoV3.header + " " + aggregatedDiscountInfoV3.subHeader
    : "";

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-7 m-7 flex flex-col w-[280px] min-h-[340px] mx-auto">
    
      <div className="mb-2 min-h-[20px] flex items-center justify-start">
        <span
          className={`px-2 py-0.5 rounded-md text-xs font-semibold ${
            discountText ? "bg-zinc-800 text-white" : "invisible"
          }`}
        >
          {discountText}
        </span>
      </div>
      <img
        className="rounded-lg mb-3 object-cover h-32 w-full"
        alt={name}
        src={
          cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
            : "https://via.placeholder.com/250"
        }
      />
      <h3 className="text-base font-bold text-black mb-1 truncate">{name}</h3>
      <h4 className="text-black text-m mb-1 truncate">{cuisines?.join(", ")}</h4>
      <h4 className="text-black text-m mb-1 truncate">{locality || areaName}</h4>
      <h4 className="text-black text-m mb-1">{slaString || sla?.deliveryTime + " mins"}</h4>
      <div className="flex items-center gap-2 mt-1">
        <span className="font-semibold text-orange-500 text-m">{avgRating} ⭐</span>
        <span className="text-black text-m">{costForTwo}</span>
      </div>
    </div>
  );
};


export const withDiscount = (RestaurantCard) => {
  return (props) => {
  
    return <RestaurantCard {...props} />;
  };
};


export default RestaurantCard;
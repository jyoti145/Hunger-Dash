import RestaurantCard,{withDiscount}  from "./RestaurtantCard"; 
import {useState , useEffect} from "react";
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";

const Body = () => {

  const [listOfRestaurants, setRestaurants] = useState([]);
  const [searchText , setsearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
    console.log("Body Rendered",listOfRestaurants);


const RestaurantCardWithDiscount = withDiscount(RestaurantCard);
 
 useEffect(() => {
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      
      const cards = data?.data?.cards || [];
      let restaurants = [];
      for (const card of cards) {
        if (
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ) {
          restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
          break;
        }
      }

   
      setRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setLoading(false);
    }
  };

  fetchRestaurants();
}, []);
  
const isOnline = useOnlineStatus();
if (!isOnline) {
  return (
    <h1 className="offline-message">
      You are offline! Please check your internet connection.
    </h1>
  );
};



    return listOfRestaurants.length === 0 ?  (<Shimmer />
    ) : loading ? (
      <div className="shimmer-container">
        <Shimmer />
      </div>
    ) :  (
      <div className="body">
        <div className="filter">
          <div className = "search">
            <input
              type="text"
              placeholder="Search for restaurants"
              className="search-input"
              
              value={searchText} 
              onChange={(e) =>{
                setsearchText(e.target.value)
              }}
            />
           <button className="search-btn" onClick={() => {
          const filterrestaurant = listOfRestaurants.filter(
          (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
       );
      setFilteredRestaurants(filterrestaurant);
   }}>
      Search
   </button>
          </div>
          <button
  className="filter-btn"
  onClick={() => {
    const filterlist = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilteredRestaurants(filterlist);
  }}
>
  Top rated restaurants
</button>
        </div>
        <div className="resto-container">
        {filteredRestaurants.map((restaurant) => (
<Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}>
  {restaurant?.info?.aggregatedDiscountInfoV3 ? (
    <RestaurantCardWithDiscount resname={restaurant.info} />
  ) : (
    <RestaurantCard resname={restaurant.info} />
  )}
</Link>
))}
  
        </div>
         <Footer />
      </div>
      
    );
  };

  export default Body;
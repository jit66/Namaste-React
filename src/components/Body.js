import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterResto(searchText,restaurants){
 
    const filterData = restaurantList.filter((restaurant)=>

        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return filterData
}

const Body = () => {
    const [ searchText,setSearchText] = useState("")
    const [restaurants , setRestaurants] = useState(restaurantList);

    const handleSearch = () =>{
      if(searchText === ""){
        setRestaurants(restaurantList);
    }else{
      const data = filterResto(searchText,restaurants);
      setRestaurants(data)
    }}
  return (
    <>
      <div className="search-container">
        <input 
            type="text" 
            placeholder="search.."
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value)
            }} />

        <button className="search-btn" 
            onClick={handleSearch}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState,useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterResto } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser} = useContext(UserContext)

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    if(!data.ok){
      throw new Error(`HTTP error! Status:${data.status}`)
    }
    
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }catch(error){
    console.error("An error occured:", error)
  }
}

  const handleSearch = () => {
      const data = filterResto(searchText, allRestaurants);
      setFilteredRestaurants(data);
  };

  const online = useOnline();

  if(!online){
    return(
      <h1>u r offline</h1>
      )
  }

  if (!allRestaurants) return null;

  // const searchbtnCss = {
  //   backgroundColor:"red"
  // }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-4 bg-slate-300 my-2 flex justify-center">
        <input
          type="text"
          className="focus:bg-slate-200 p-2 m-2 w-96"
          placeholder="Search.........."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button className="search-btn p-2 m-2 bg-blue-400 rounded-md hover:bg-blue-600" onClick={handleSearch}>
          Search
        </button>
        <input value={user.name} onChange={
          e => setUser({
            ...user,
            name : e.target.value,
          })
        }></input>
        <input value={user.email} onChange={
          e => setUser({
            ...user,
            email : e.target.value,
          })
        }></input>
      </div>
      <div className="flex flex-wrap gap-6">
        {filteredRestaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id } key={restaurant.info.id}>
              <RestaurantCard {...restaurant.info}  />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;

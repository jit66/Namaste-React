import { useEffect, useState } from "react";
import { restaurantList } from "../constants";

const useRestoCard = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status:${data.status}`);
      }

      const json = await data.json();
      console.log(json);
      setAllRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("An error occured:", error);
    }
  }

  const handleSearch = () => {
    const data = filterResto(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  return [allRestaurants, filteredRestaurants, searchText, handleSearch];
};

export default useRestoCard;

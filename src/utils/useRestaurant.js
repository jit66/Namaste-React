import { useEffect, useState } from "react";

const useRestaurant = (id) =>{

    const [restoData, setRestoData] = useState(null);
    const [restoMenu, setRestoMenu] = useState([null]);
  
    useEffect(() => {
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setRestoData(json.data.cards[0].card.card.info);
      setRestoMenu(
        json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
          ?.itemCards
      );
    }

    return [restoData,restoMenu]
}

export default useRestaurant
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
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
      json.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card?.card
        .itemCards
    );
  }

  return (!restoData) ? <Shimmer/> : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {restoData.id}</h1>
        <h1>{restoData.name}</h1>
        <img width={300} src={IMG_CDN_URL + restoData.cloudinaryImageId} />
        <h3>{restoData.areaName}</h3>
        <h3>{restoData.city}</h3>
        <h3>{restoData.costForTwoMessage}</h3>
        <h3>{restoData.avgRating}</h3>
      </div>

    {console.log((restoMenu))}


    <div>
  <h1>Menu</h1>
  <ul>
    {Array.isArray(restoMenu) && restoMenu.length > 0 ? (
      Object.values(restoMenu).map((item) => (
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name}
        </li>
      ))
    ) : (
      <h1>Not found</h1>
    )}
  </ul>
</div>

        {/* <h1>Menu</h1>
        <ul>
          {restoMenu.length === 0 ? (
            <h1>Not found</h1>
          ) : (
            restoMenu.map((item) => <li key={item.id}>{...item?.card?.info?.name}</li>)
          )}
        </ul> */}

        {/* <ul>
                {Object.values(restoMenu.itemCards?.card.info).map((item)=><li>
                    {item.name}
                </li>)}
            </ul>
             */}
      </div>
  );
};

export default RestaurantMenu;

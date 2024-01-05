import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const {name,cuisines,cloudinaryImageId,avgRating} = restaurant.info

  const {user} = useContext(UserContext)
  return (
    <>
      
      <div className="w-64 h-80 p-2 m-5 shadow-lg bg-blue-200">
        <img className=" h-32 w-[100%]" src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="break-words">{cuisines.join(",")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{user.name} - {user.email}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;

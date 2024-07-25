import { useContext } from "react";
import {CARD_IMAGE_BASE_URL} from "../utility/constants";
import UserContext from "../utility/UserContext";
const RestaurantCard = (props) => {
    const {restaurantInfo} = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = restaurantInfo;
    const {loggedInUser} = useContext(UserContext);
    return(
     <>
      <div data-testid="restCard" className="rest-card p-4 m-4 w-[300px] h-[450px] rounded-lg bg-gray-200 hover:bg-gray-300">
        <img className ="res-logo rounded-lg w-[300px] h-[200px]" src={CARD_IMAGE_BASE_URL+cloudinaryImageId} alt="no image" />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString} min</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
     </>
    )
  }

  export const withDiscountedLabel = (RestaurantCard)=>{
    return(props)=>{
      return (
        <>
            <label className="absolute m-1 p-1 mt-3 bg-yellow-400 rounded-lg">{props?.restaurantInfo?.aggregatedDiscountInfoV3?.header+" "+props?.restaurantInfo?.aggregatedDiscountInfoV3?.subHeader}</label>
            <RestaurantCard {...props}/>
        </>
      )
    }
  }

  export default RestaurantCard;
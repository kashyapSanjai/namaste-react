import {CARD_IMAGE_BASE_URL} from "../utility/constants"
const RestaurantCard = (props) => {
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = props?.restaurantInfo?.info;
    return(
      <div className="rest-card p-4 m-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300">
        <img className ="res-logo rounded-lg" src={CARD_IMAGE_BASE_URL+cloudinaryImageId} alt="no image" />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString} min</h4>
      </div>
    )
  }

  export default RestaurantCard;
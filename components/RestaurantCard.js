import {CARD_IMAGE_BASE_URL} from "../utility/constants"
const RestaurantCard = (props) => {
    const {resData} = props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,sla} = props?.restaurantInfo?.info;
    return(
      <div className="rest-card">
        <img className ="res-logo" src={CARD_IMAGE_BASE_URL+cloudinaryImageId} alt="no image" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString} min</h4>
      </div>
    )
  }

  export default RestaurantCard;
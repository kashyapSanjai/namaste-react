import { useParams } from "react-router-dom";
import Simmer from "./Simmer";
import useRestaurantMenu from "../utility/useRestaurantMenu";
const RestaurantsMenu = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);//we write fetch data logic in custom hook so now this component responsibility is display data

    if(resInfo==null)return <Simmer/>;

    const {name,costForTwoMessage, cuisines ,cloudinaryImageId, avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item=> 
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}
                    </li>
                )} 
            </ul>
        </div>
    )
}
export default RestaurantsMenu;
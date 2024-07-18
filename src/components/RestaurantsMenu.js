import { useParams } from "react-router-dom";
import Simmer from "./Simmer";
import useRestaurantMenu from "../utility/useRestaurantMenu";
import RestaurantCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurantsMenu = ()=>{

    const {resId} = useParams();
    const [showIndex,setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu(resId);//we write fetch data logic in custom hook so now this component responsibility is display data

    if(resInfo==null)return <Simmer/>;

    const {name,costForTwoMessage, cuisines ,cloudinaryImageId, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log("sanjay",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card.card['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("dsfsfsfdds",categories);
    

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {
                categories?.map((category,index)=>{
                    return <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data = {category?.card?.card}
                    showItem = {index==showIndex?true:false}
                    setShowIndex={setShowIndex}
                    index={index}
                    showIndex={showIndex}
                    />  
                })
            }   
        </div>
    )
}
export default RestaurantsMenu;
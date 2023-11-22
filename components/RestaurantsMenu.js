import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Simmer from "./Simmer";
import { MENU_API } from "../utility/constants";
const RestaurantsMenu = ()=>{
    const [resInfo ,setResInfo] = useState(null);
    console.log(useParams());
    const {resId} = useParams();
    
    useEffect(()=>{
        fetchApi();
    },[])

    const fetchApi = async ()=>{
        console.log("fetch api calling");
        let resp = await fetch(MENU_API+resId);
        let json = await resp.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setResInfo(json?.data);
    }
    if(resInfo==null)return <Simmer/>;

    const {name,costForTwoMessage, cuisines ,cloudinaryImageId, avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
    

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
                        {item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price/100}
                    </li>
                )} 
            </ul>
        </div>
    )
}
export default RestaurantsMenu;
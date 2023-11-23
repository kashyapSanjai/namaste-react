import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchApi()
    })
    async function fetchApi(){
        console.log("fetch api calling");
        let resp = await fetch(MENU_API+resId);
        let json = await resp.json();
        setResInfo(json?.data);
        console.log(json?.data?.cards[0]?.card?.card?.info);
    }
    return resInfo;
}

export default useRestaurantMenu;
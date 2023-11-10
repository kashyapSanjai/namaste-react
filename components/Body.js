import { useEffect, useState } from "react"
import {resObj} from "../utility/mockData"
import RestaurantCard from "./RestaurantCard"


const Body = ()=>{
const [restaurantList, setRestaurantList] = useState(resObj.restaurants);

function filteredData(){
    let filteredList = restaurantList?.filter((res)=>res?.info.avgRating>4.1)
    setRestaurantList(filteredList)
}
     

    return(
      <div className="body">
        <div className="search">
          <input type="text" name="" id="" placeholder="Search"/>
        </div>
        <div className="filtered-div">
            <button type="button" className="top-rated-btn" onClick={() => filteredData()}>Top rated Restaurant</button>
        </div>
        <div className="restro-container">
          {
            restaurantList?.map((restaurantData)=><RestaurantCard key={restaurantData?.info?.id} restaurantInfo={restaurantData} />)
          }
        </div>
      </div>
    )
  }
  export default Body
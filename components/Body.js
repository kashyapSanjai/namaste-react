import { useEffect, useState } from "react"
import {resObj} from "../utility/mockData"
import RestaurantCard from "./RestaurantCard"
import Simmer from "./Simmer"


const Body = ()=>{
const [restaurantList, setRestaurantList] = useState([]);
const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
const [searchText, setSearchText] = useState([]);

function filteredData(){
    let filteredList = restaurantList?.filter((res)=>res?.info.avgRating>4.1)
    setRestaurantList(filteredList)
}

useEffect(()=>{
  fetchData();
},[])

const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setRestaurantList(json.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredRestaurantList(json.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants);
}



    return restaurantList?.length===0?(
      <Simmer/>
    ):(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" name="" className="search-box" placeholder="Search" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button type="button" onClick={()=>{
              fetchData();
              let searchedvalue = restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurantList(searchedvalue);
              console.log(restaurantList)
            }}>Search</button>
          </div>
          <div className="filtered-div">
              <button type="button" className="top-rated-btn" onClick={() => filteredData()}>Top rated Restaurant</button>  
          </div>
        </div>
        <div className="restro-container">
          {
            filteredRestaurantList?.map((restaurantData)=><RestaurantCard key={restaurantData?.info?.id} restaurantInfo={restaurantData} />)
          }
        </div>
      </div>
    )
  }
  export default Body
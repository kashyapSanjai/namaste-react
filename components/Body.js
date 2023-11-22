import { useEffect, useState } from "react"
import {resObj} from "../utility/mockData"
import RestaurantCard from "./RestaurantCard"
import Simmer from "./Simmer"
import { Link } from "react-router-dom"
import { RESTAURANT_LIST } from "../utility/constants"


const Body = ()=>{
const [restaurantList, setRestaurantList] = useState([]);
const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
const [searchText, setSearchText] = useState([]);

function filteredData(){
    let filteredList = restaurantList?.filter((res)=>res?.info.avgRating>4.1)
    setFilteredRestaurantList(filteredList)
}

useEffect(()=>{
  fetchData();
},[])

const fetchData = async ()=>{
  const data = await fetch(RESTAURANT_LIST);
  const json = await data.json();
  setRestaurantList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurantList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

    if(restaurantList?.length===0)return <Simmer/>;
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" name="" className="search-box" placeholder="Search" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button type="button" onClick={()=>{
              // fetchData();
              let searchedValue = restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurantList(searchedValue);
              console.log(restaurantList)
            }}>Search</button>
          </div>
          <div className="filtered-div">
              <button type="button" className="top-rated-btn" onClick={() => filteredData()}>Top rated Restaurant</button>  
          </div>
        </div>
        <div className="restro-container">
          {
            filteredRestaurantList?.map((restaurantData)=>
            <Link key={restaurantData?.info?.id} to={`/restaurants/${restaurantData?.info?.id}`}><RestaurantCard restaurantInfo={restaurantData} /></Link>
            )
          }
        </div>
      </div>
    )
  }
  export default Body
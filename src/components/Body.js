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
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" name="" className="py-2 px-2 search-box border border-solid border-gray-400  border-rounded" placeholder="Search" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }}/>
            <button type="button" className="px-4 m-4  py-1 bg-green-200 rounded-lg border border-solid border-green-600" onClick={()=>{
              // fetchData();
              let searchedValue = restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredRestaurantList(searchedValue);
              console.log(restaurantList)
            }}>Search</button>
          </div>
          <div className="filtered-div my-4 p-3 flex items-center">
              <button type="button" className="top-rated-btn px-4  py-2  bg-blue-200 rounded-lg" onClick={() => filteredData()}>Top rated Restaurant</button>  
          </div>
        </div>
        <div className="restro-container flex flex-wrap">
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
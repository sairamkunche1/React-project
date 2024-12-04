import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import { useState } from "react";
import reslist from "../utils/mockData";





const Body = () =>{
  let [listofRestaurants, setListofRestaurants] =useState(reslist);
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList=listofRestaurants.filter((res) =>res.info.avgRating>4);
            setListofRestaurants(filteredList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {listofRestaurants.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>

            ))} 
        </div>
      </div>
    )
  }


export default Body;
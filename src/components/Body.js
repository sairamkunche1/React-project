import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utils/mockData";
import { useEffect, useState } from "react";
import BodyShimmer from "./BodyShimmer";





const Body = () =>{
  let [listofRestaurants, setListofRestaurants] =useState([]);

    useEffect(() => {
      fetchData();
      },[] );
    

    const fetchData = async () => {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await response.json(); 
      const restaurants = (json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(restaurants);
      setListofRestaurants(restaurants);

    };

   if(listofRestaurants.length===0){
    return <BodyShimmer/>;
   }
    
    return(
      
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList=listofRestaurants.filter((res) =>res.info.avgRating>4.3);
            setListofRestaurants(filteredList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
         <div className="res-container">
      {Array.isArray(listofRestaurants) && listofRestaurants.length > 0 ? (
        listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
        
      </div>
    )
  }


export default Body;
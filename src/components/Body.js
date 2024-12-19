import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utils/mockData";
import { useEffect, useState } from "react";
import BodyShimmer from "./BodyShimmer";


const Body = () =>{
  const [listofRestaurants, setListofRestaurants] =useState([]);
  const[filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

    useEffect(() => {
      fetchData();
      },[] );
  
    const fetchData = async () => {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
      const json = await response.json(); 
      console.log("json",json);
      const restaurants = ( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(restaurants);
      setListofRestaurants(restaurants);
      setFilteredRestaurants(restaurants);

    };

   
    
    return listofRestaurants && listofRestaurants.length === 0? (<BodyShimmer/>) :(
      
      <div className="body">
        <div className="filter">
          
          <button className="filter-btn" onClick={()=>{
            const filteredList=listofRestaurants.filter((res) =>res.info.avgRating>4.3);
            setListofRestaurants(filteredList);
          }}>
            Top Rated Restaurants
          </button>

          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button className="search-btn" onClick={()=>{
              const filteredRestaurants= listofRestaurants.filter((resData)=>resData.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurants);
            }}>Search</button>
          </div>

        </div>
         <div className="res-container">
         {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
        
      </div>
    );
  }


export default Body;
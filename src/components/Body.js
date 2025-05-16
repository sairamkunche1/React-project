import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utils/mockData";
import { useEffect, useState } from "react";
import BodyShimmer from "./BodyShimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import BannerUi from "./BannerUi";
import MiniCarousel from "./MiniCarousel";
import food from '../assets/food-banner.jpg';
import React from "react";


const Body = () =>{
  const [listofRestaurants, setListofRestaurants] =useState([]);
  const[filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

  const [menuList, setMenuList] = useState([]);


  useEffect(()=>{
    fetchData();
  },[]);
  
    const fetchData = async () => {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
      const json = await response.json(); 
      //console.log("json",json);
      const restaurants = ( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //console.log("restaurants",restaurants);
      const menuList =  json?.data?.cards[0]?.card?.card?.imageGridCards.info;
      setMenuList(menuList);
      console.log("menulist",menuList);
      setListofRestaurants(restaurants);
      setFilteredRestaurants(restaurants);

    };

   
   console.log("food",food);
   const onlinestatus = useOnlineStatus();

   if(onlinestatus===false){
    return(
      <div>
        <h1>Looks like you are offline!!!</h1>
        <h2>Please check your internet connection.</h2>
      </div>
      
    )
   }
    
    return listofRestaurants && listofRestaurants.length === 0? (<BodyShimmer/>) :(
      
     <div className="body bg-gray-50 p-4">
      
        {/* Banner Section */}
        <div className="flex justify-center items-center h-60 bg-gradient-to-r from-blue-50 to-purple-50 mb-6">
          <img 
            src={food} 
            alt="Food Banner" 
            className="w-full max-w-4xl h-full object-cover rounded-lg" 
          />
        </div>

        {/* Carousel */}
        <div className="pt-3  mb-6">
          <MiniCarousel carouseldata={menuList} />
        </div>

        {/* Search Filter */}
        <div className="flex justify-end mb-2 py-3 bg-white">
          <div className="flex items-end bg-white p-2 rounded-lg  border border-gray-200">
            <input
              type="text"
              className="border-0 focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2 w-64 outline-none"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              onClick={() => {
                const filteredRestaurants = listofRestaurants.filter((resData) =>
                  resData.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id}  style={{ textDecoration: "none", color: "inherit" }} className="res-card-link" to={"/restaurant/"+ restaurant.info.id}>
                  <RestaurantCard  resData={restaurant} />
                  </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">No restaurants found.</p>
            </div>
          )}
        </div>
</div>
    );
  }


export default Body;
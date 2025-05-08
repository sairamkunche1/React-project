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
      
      <div className="body">

      <div className="flex justify-center items-center h-80 bg-gray-100">
      <img src={food} alt="Food Banner" className="w-[600px] h-auto rounded-lg" />
      </div>

         <div className=" pt-3 ">
              <MiniCarousel carouseldata={menuList} />
          </div>
        <div className="filter">
          
         {/* <button className="filter-btn" onClick={()=>{
            const filteredList=listofRestaurants.filter((res) =>res.info.avgRating>4.3);
            setListofRestaurants(filteredList);
          }}>
            Top Rated Restaurants
          </button> */}
          <div className="m-4 p-4">
            <input type="text"  className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button className=" cursor-pointer  bg-green-300 rounded-lg ml-2 px-4" onClick={()=>{
              const filteredRestaurants= listofRestaurants.filter((resData)=>resData.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurants);
            }}>Search</button>
         </div>
        </div>



         <div className="flex flex-wrap">
         {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id}  style={{ textDecoration: "none", color: "inherit" }} className="res-card-link" to={"/restaurant/"+ restaurant.info.id}>
            <RestaurantCard  resData={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
        
      </div>
    );
  }


export default Body;
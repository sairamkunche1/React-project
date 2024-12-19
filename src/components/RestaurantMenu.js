import { useEffect, useState } from "react";
import BodyShimmer from "./BodyShimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () =>{

    const [resinfo, setresinfo] = useState(null);

    const {resId} = useParams();
    console.log(resId);
    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&submitAction=ENTER");
          const json = await data.json();
          console.log("json",json); 
         setresinfo(json.data); 
      };
     
      if (resinfo === null) {
        return <BodyShimmer />;
      }

      const {name,cuisines,costForTwoMessage}= resinfo.cards[2]?.card?.card?.info;

      const {itemCards} = resinfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
      return (
        <div className="menu-card">
          <ul>
          <h1 className="res-name-class">{name}</h1>
            <ul>
                {itemCards.map(item =>
                <li key={item.card.info.id} className="res-list">
                    <img 
                        src={CDN_URL + item.card.info.imageId} 
                        alt={item.card.info.name} 
                        className="image-class"
                    />
                    <h2>{item.card.info.name} </h2>
                    <h3>Price: ₹{item.card.info.price/100}</h3>
                    <h3>{item.card.info.ratings.aggregatedRating.rating}</h3>
                    <h2>( {item.card.info.description} )</h2>
                </li>)};
            </ul>
          </ul>
        </div>
      );
    };


export default RestaurantMenu;
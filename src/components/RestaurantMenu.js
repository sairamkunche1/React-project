import { useEffect, useState } from "react";
import BodyShimmer from "./BodyShimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () =>{

    const [resinfo, setresinfo] = useState(null);

    const {resId} = useParams();
    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
          const data = await fetch(MENU_API+resId);
          const json = await data.json();
          //console.log("json",json); 
         setresinfo(json.data); 
      };
     
      if (resinfo === null) {
        return <BodyShimmer />;
      }

      const {name,cuisines,costForTwoMessage}= resinfo.cards[2]?.card?.card?.info;

      const {itemCards} = resinfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
     // console.log(resinfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards)

      const categories = resinfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      //console.log(categories);


      return (
        <div className="px-4">
          <h1 className="res-name-class font-bold text-2xl mb-4">{name}</h1>

          {/* Restaurant Menu Cards */}
          <div className="w-full">
            <ul className="flex flex-wrap justify-center gap-4 list-none p-0 m-0">
              {itemCards.map(item => (
                <li key={item.card.info.id} className="res-list w-48 p-4 bg-gray-100 rounded-lg text-center shadow-md">
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    alt={item.card.info.name}
                    className="image-class w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h2 className="font-semibold">{item.card.info.name}</h2>
                  <h3 className="text-sm">Price: ₹{item.card.info.price / 100}</h3>
                  <h3 className="text-sm">⭐ {item.card.info.ratings.aggregatedRating.rating}</h3>
                </li>
              ))}
            </ul>
          </div>
        
          <hr className="my-8 border-t-2 border-gray-300" />

          {/* */}
        <div className="w-full ml-10 flex justify-start">
          <div className="w-fit">
            {categories.map((category) => (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
              />
            ))}
          </div>
        </div>
</div>
 );
    };


export default RestaurantMenu;
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (data) =>{

    const [showItems, setShowItems] = useState(false);
   // console.log("data",data);

   const handleClick = () =>{
    setShowItems(!showItems);
   }
    return (
        <div>
            <div className="w-3xl mx-auto my-6 py-3 px-3 cursor-pointer  bg-grey-50 shadow-lg pd-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
                    <span >⬇️</span>
                </div>

                {showItems && <ItemList items = {data.data.itemCards}/>}
            </div>
        </div>
    )
}


export default RestaurantCategory;
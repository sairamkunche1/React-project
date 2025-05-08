import ItemList from "./ItemList";
import { useState } from "react";

const Accordion = ({data , showItems, setShowIndex ,showIndex, index}) =>{

    const handleClick = () => {
        if (index === showIndex) {
           setShowIndex(null);  
        } else {
           setShowIndex(index); 
        }
     };
    return (
        <div>
            <div className="w-3xl mx-auto my-6 py-3 px-3 cursor-pointer  bg-grey-50 shadow-lg pd-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>

                    <span >⬇️</span>
                </div>

                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}


export default Accordion;
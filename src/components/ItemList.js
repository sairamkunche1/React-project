import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log("items:", items);
    return (
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span>{item.card.info.name}</span>
                        <span className="font-bold-800">₹{item.card.info.price/100 ? item.card.info.price/100 :item.card.info.defaultPrice/100 }</span>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-28 rounded-lg"></img>
            </div>
            <button type="button" className="cursor-pointer float-right mr-7 bg-white text-green-500 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm hover:bg-green-50">
                  ADD
            </button>

            { <p className="text-xs pt-2">{item.card.info.description}</p>}
          
            
          </div>
        ))}
      </div>
    );
  };
  
  
export default ItemList;
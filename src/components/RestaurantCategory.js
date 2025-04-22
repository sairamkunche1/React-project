import ItemList from "./ItemList";

const RestaurantCategory = (data) =>{
   // console.log("data",data);
    return (
        <div>
            <div className="w-3xl mx-auto my-6 py-3 px-3  bg-grey-50 shadow-lg pd-4 ">
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{data.data.title} ({data.data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <ItemList items = {data.data.itemCards}/>
            </div>
        </div>
    )
}


export default RestaurantCategory;
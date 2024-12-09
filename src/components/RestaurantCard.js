import { imageUrls } from "../utils/mockData";

const RestaurantCard =(props)=>{
    const {resData}= props;
    if (!resData || !resData.info) {
      return <div>Error: Data is missing</div>;
    }
    const {name,avgRating,cuisines,sla,cloudinaryImageId} = resData?.info;
    //const imageUrl = cloudinaryImageId ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`: '';
    const imageUrl = "https://via.placeholder.com/320";


   
 
    
    return(
      <div className="res-card"> 
         {imageUrl ? <img className="res-logo" alt="res-logo" src={imageUrl} /> : <div>No image available</div>}
         <h3 style={{ textAlign: "center" }}>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime} min</h4>
      </div>
    )
  }


  export default RestaurantCard;
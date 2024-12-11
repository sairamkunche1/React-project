import { imageUrls } from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData}= props;
    if (!resData || !resData.info) {
      return <div>Error: Data is missing</div>;
    }
    const {name,avgRating,cuisines,sla,
      cloudinaryImageId,
      costForTwo
      } = resData?.info;

    return(
      <div className="res-card"> 
         <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}
      />
         <h3 style={{ textAlign: "center" }}>{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} min</h4>
      </div>
    )
  }


  export default RestaurantCard;
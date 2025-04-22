import { imageUrls } from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData}= props;
    // if (!resData || !resData.info) {
    //   return <div>Error: Data is missing</div>;
    // }
    const {name,avgRating, 
      areaName,cuisines,sla,
      cloudinaryImageId,
      costForTwo
      } = resData?.info;

    return(
      <div className="ml-15">
        <div className="res-card"> 
              <img
                  className="rounded-lg"
                  alt="res-logo"
                  src={CDN_URL+cloudinaryImageId}
              />
              <div className="res-card-data">
                <h3>{name}</h3>
                <h4 style={{ color: 'maroon' }}>{costForTwo}</h4>
                  <h4>{cuisines.join(",")}</h4>
                  <h4>{avgRating ? `⭐ ${avgRating}` : null}</h4>    
                  <h4>{sla.deliveryTime} min</h4>
                  <h4>{areaName}</h4>
              </div>
        </div>
      </div>
    )
  }


  export default RestaurantCard;
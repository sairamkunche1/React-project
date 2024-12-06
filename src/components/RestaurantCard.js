const RestaurantCard =(props)=>{
    const {resData}= props;


    if (!resData || !resData.info) {
      return <div>Error: Data is missing</div>;
    }
    const {name,avgRating,cuisines,avgTime,cloudinaryImageId} = resData?.info;
    console.log(cloudinaryImageId);
    const imageUrl ="https://cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
   
    return(
      <div className="res-card">
         {imageUrl ? <img className="res-logo" alt="res-logo" src={imageUrl} /> : <div>No image available</div>}
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{avgTime}min</h4>
      </div>
    )
  }


  export default RestaurantCard;
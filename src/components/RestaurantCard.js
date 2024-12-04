const RestaurantCard =(props)=>{
    const {resData}= props;


    if (!resData || !resData.info) {
      return <div>Error: Data is missing</div>;
    }
    const {name,avgRating,cuisines,avgTime,img} = resData?.info;
   
    return(
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={img}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{avgTime}min</h4>
      </div>
    )
  }


  export default RestaurantCard;
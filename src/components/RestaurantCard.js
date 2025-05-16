import { imageUrls } from "../utils/mockData";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, areaName, cuisines, sla, cloudinaryImageId, costForTwo } = resData?.info;
  
  return (
    
      <div className="bg-white rounded-e-md overflow-hidden shadow-md h-full flex flex-col border border-gray-100">
        {/* Image with fixed aspect ratio */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
              {name}
            </h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {cuisines?.join(", ") || 'Multiple cuisines'}
            </p>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-sm font-medium text-blue-800">
                    {avgRating || '--'}
                  </span>
              </div>
              <span className="text-sm text-gray-500">
                • {sla?.deliveryTime || '--'} mins
              </span>
              <span className="text-sm font-medium text-purple-600">
                {costForTwo}
              </span>
            </div>
          
          <p className="text-xs text-gray-500 mt-auto">
            {areaName}
          </p>
        </div>
      </div>

  );

}
  export default RestaurantCard;
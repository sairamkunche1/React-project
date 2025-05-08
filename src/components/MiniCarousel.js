import { Carousel_URL } from "../utils/constants";
import { useState } from "react";

const MiniCarousel = (props) =>{
    const{carouseldata} = props;

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < carouseldata.length) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const visibleItems = carouseldata?.slice(startIndex, startIndex + itemsPerPage);


    return (
      <div className="p-2">
          <div className="w-full bg-gray-100">
            
          <div className="flex justify-between items-center w-full mb-2 absolute">
               <h1 className="text-2xl font-semibold mr-4 text-black">What's on your mind?</h1>
    
              <div className="flex space-x-2 mt-3 mr-5">
                <button onClick={handlePrev} disabled={startIndex === 0}
                  className="bg-gray-200 text-black font-bold text-2xl w-8 h-8 cursor-pointer rounded-full flex items-center justify-center disabled:opacity-50"
                >
                  ←
                </button>
                <button onClick={handleNext} disabled={startIndex + itemsPerPage >= carouseldata.length}
                  className="bg-gray-200 text-black font-bold w-8 h-8 text-2xl cursor-pointer rounded-full flex items-center justify-center disabled:opacity-50"
                >
                  →
                </button>
              </div>
          </div>
  
                 
              <div className="w-full flex flex-wrap  justify-start ">
                          {visibleItems?.map((item, index) => (
                         <img
                         key={index}
                         className="object-cover rounded w-1/6 cursor-pointer"
                         src={Carousel_URL + item?.imageId}
                         alt={item?.action?.text}
                       />
                          ))}
              </div>
          </div>
  
  
  
      </div>
    );
  
}

export default MiniCarousel;
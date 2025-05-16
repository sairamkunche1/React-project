const BodyShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gray-50">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm h-full border border-gray-100">
          {/* Image placeholder */}
          <div className="h-48 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
          
          {/* Content placeholder */}
           <div className="p-4 space-y-3">
                <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex justify-between">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default BodyShimmer;
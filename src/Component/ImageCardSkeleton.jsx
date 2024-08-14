const ImageCardSkeleton = () => {
    return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        { [...Array(6).keys()].map(k => (
              <div key={k} className="card card-compact bg-base-100 shadow-xl animate-pulse">
              <figure className="bg-gray-300 h-[450px] w-full"></figure>
              
            </div>
        ))}
    </div>
    );
  };

  export default ImageCardSkeleton
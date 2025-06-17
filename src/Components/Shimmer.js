// const Shimmer = () => {
//   const shimmerCards = [];
//   for (let i = 0; i < 15; i++) {
//     shimmerCards.push(<div className="Shimmer-card" key={i}></div>);
//   }

//   return (
//     <div>
      
//       <div className="shimmer-navbar"></div>

      
//       <div className="shimmer-filter-row">
//         <div className="shimmer-search"></div>
//         <div className="shimmer-btn"></div>
//       </div>

//       <div className="shimmmer-container">
//         {shimmerCards}
//       </div>
//     </div>
//   );
// };

// export default Shimmer;


const Shimmer = () => {
  const shimmerCards = [];
  for (let i = 0; i < 15; i++) {
    shimmerCards.push(
      <div
        key={i}
        className="bg-gray-200 animate-pulse rounded-xl h-64 w-full"
      ></div>
    );
  }

  return (
    <div className="px-4 py-8">
      {/* Navbar shimmer */}
      <div className="h-12 w-full max-w-7xl mx-auto bg-gray-200 animate-pulse rounded mb-8"></div>

      {/* Filter row shimmer */}
      <div className="flex gap-4 max-w-4xl mx-auto mb-8">
        <div className="h-10 w-64 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-10 w-40 bg-gray-200 animate-pulse rounded"></div>
      </div>

      {/* Cards shimmer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {shimmerCards}
      </div>
    </div>
  );
};

export default Shimmer;
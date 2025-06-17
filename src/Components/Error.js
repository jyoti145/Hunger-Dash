// import { useRouteError } from "react-router-dom";


// const Error = () =>{
//     const err = useRouteError();
//     return (
//         <div>
//             <h1>Oops!</h1>
//             <h2>Something went wrong</h2>
//             <h3>404 Not Found</h3>
//             <h3>{err.status}: {err.statusText}</h3>
//             <p>Sorry, the page you are looking for does not exist.</p>
//         </div>
//     )
// }
// export default Error;

import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
    <p className="text-xl text-gray-700 mb-6">Oops! Page not found.</p>
    <Link
      to="/"
      className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
    >
      Go Home
    </Link>
  </div>
);

export default Error;
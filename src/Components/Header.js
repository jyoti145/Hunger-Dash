// import { LOGO_URL } from "../utils/constants";
// import {useState } from "react";
// import {Link} from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Header = () => {
//   const[login , setlogin] = useState("login");
//   const isOnline = useOnlineStatus();
//     return (
//       <div className="header">
//         <div className="logo-container">
//           <img
//             className="logo"
//             src={LOGO_URL}
//           />
//         </div>
//         <div className="nav-items">
//           <ul>
//          <h1
//         style={{
//           fontSize: "1.2rem",
//           fontWeight: "normal",
//           color: isOnline ? "green" : "red",
//         }}
//       >
//         {isOnline ? "🟢 Online" : "🔴 Offline"}
//       </h1>
//             <li>
//             <Link to="/">Home</Link> 
//             </li>
//             <li> 
//               <Link to="/about">About</Link>
//                </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//               </li>
//             <li>Cart</li>
//              <li>
//               <Link to="/grocery">Grocery</Link>
//               </li>
//             <button className="login-btn" onClick={() =>{
//             login === "login" ? setlogin("logout") : setlogin("login");
           
//           }} >{login}</button>
         
//           </ul>
         
//         </div>
//       </div>
//     );
//   };
//   export default Header;


import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("Cart Items:", cartItems);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          {/* <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_60,h_60/Logo_xhdpi"
            alt="Hunger Dash"
            className="h-10 w-10"
          /> */}
          <span className="text-2xl font-bold text-orange-500">Hunger Dash</span>
        </Link>
        <nav className="flex gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold hover:text-orange-500 transition ${
                isActive ? "text-orange-500" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold hover:text-orange-500 transition ${
                isActive ? "text-orange-500" : "text-gray-700"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold hover:text-orange-500 transition ${
                isActive ? "text-orange-500" : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/grocery"
            className={({ isActive }) =>
              `font-semibold hover:text-orange-500 transition ${
                isActive ? "text-orange-500" : "text-gray-700"
              }`
            }
          >
            Grocery
          </NavLink>
     <NavLink
  to="/cart"
  className={({ isActive }) =>
    `font-semibold hover:text-orange-500 transition ${
      isActive ? "text-orange-500" : "text-gray-700"
    }`
  }
>
  <span className="relative inline-block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9"  // Bigger icon
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7"
      />
    </svg>
    {cartItems.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white font-bold rounded-full px-1 py-0 text-[10px] shadow">
        {cartItems.length}
      </span>
    )}
  </span>
</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
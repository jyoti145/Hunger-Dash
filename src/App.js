import React , {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestaurantMenuCard";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart";
import appStore from "./Utils/appStore";


const  Grocery = lazy(() => import("./Components/Grocery"));
const AppLayout = () => {
  return (
    <Provider store= {appStore}>
    <div className="App">
      <Header />
      <Outlet />
  
    </div>
    </Provider>
  );
};

  const approuter = createBrowserRouter([
        {
          path: "/",
          element: <AppLayout/>,
          children:[
               {
          path: "/",
          element: <Body/>,
        },
            {
          path: "/about",
          element: <About />,
        },
          {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element:<RestaurantMenu/>
        },
         {
          path: "/grocery",
          element: <Suspense fallback={<h1>Loading Grocery....</h1>}><Grocery /></Suspense>,
        },
          {
          path: "/cart",
          element: <Cart />,
        },
          ],
          errorElement: <Error />,
          
        },
        
      ])
      
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router = {approuter}/>);




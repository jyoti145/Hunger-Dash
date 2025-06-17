import React , {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import RestaurantMenu from "./src/Components/RestaurantMenuCard";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/Components/Cart";


const  Grocery = lazy(() => import("./src/Components/Grocery"));
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




import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Products from "./components/Products";
//import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

 
const Contact = lazy(()=> import("./components/Contact"));       // Lazy Loaded the Contact Page



const Applayout = () => {
  return(
  <div className="app">
    <Header/>
    <Outlet />
    <Footer/>
  </div>
  )
}

const appRouter =createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [ 
     {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Suspense fallback ={<h1>Loading...</h1>}><Contact /></Suspense>
    },
    {
      path: "/restaurant/:resId",
      element: <RestaurantMenu />
    },
    {
      path:"/products",
      element: <Products/>
    }
  ],
    errorElement : <Error />
  },
 
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>);    
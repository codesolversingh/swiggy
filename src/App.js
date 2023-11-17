import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/pages/About";
import ContactUs from './components/pages/ContactUs';
import Cart from "./components/pages/Cart";
import ErrorPage from "./components/pages/ErrorPage";
import RestaurantMenu from "./components/pages/RestaurantMenu";
import LoginPage from "./components/authentication/LoginPage"
 
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
{/* according to the children route it use the different component, So this is the beuty of the outlet in react-router-dom. */}
      <Outlet/>
      
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element :<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path:"/authentication",
        element:<LoginPage/>
      }
    ],
  
    errorElement:<ErrorPage/>
 
  },  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);




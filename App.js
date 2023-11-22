import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantsMenu from "./components/RestaurantsMenu";



/**
 * Component for food delivery app
 *
 * Header
 *  - logo
 *  - nav item
 * Body
 *  - search
 *  - restaurant card container
 *    - restaurant card
 *      - image
 *      - name
 *      - cuisines
 *      - rating
 *      - cost
 * Footer
 *  - copyright
 *  - address
 *  - links
 */


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/contact-us",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(<HeadingComponent></HeadingComponent>); //also componect call like this
// root.render(HeadingComponent()); //also componect call like this

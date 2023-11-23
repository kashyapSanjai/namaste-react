import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import RestaurantsMenu from "./components/RestaurantsMenu";
import useOnlineStatus from "./utility/useOnlineStatus";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import( "./components/Grocery"))




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
  const onlineStatus = useOnlineStatus();
  return (
    <div className="app">
      <Header />
      {onlineStatus===false? <h1> No Internet Connection !!</h1>:<Outlet/>}
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
        path: "/about",
        element: <About/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu/>
      },
      {
        path: "/grocery", 
        element: <Suspense fallback={<h1>Page Loading</h1>} ><Grocery/></Suspense>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(<HeadingComponent></HeadingComponent>); //also componect call like this
// root.render(HeadingComponent()); //also componect call like this

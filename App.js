import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import ErrorPage from "./src/components/ErrorPage";
import RestaurantsMenu from "./src/components/RestaurantsMenu";
import useOnlineStatus from "./src/utility/useOnlineStatus";
import UserContext from "./src/utility/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utility/appStore";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";
const Grocery = lazy(()=>import( "./src/components/Grocery"))




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
  const [userInfo,setUserInfo] = useState();

  useEffect(()=>{
    const data = {
      loggedInUser:"Sanjay Kashyap"
    }
    setUserInfo(data.loggedInUser);
  },[])
  return (
    <div className="app">
        <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
          {/* <UserContext.Provider value={{loggedInUser:"Hello"}}> */}
          <Header />
          {/* </UserContext.Provider> */}

          {onlineStatus===false? <h1> No Internet Connection !!</h1>:<Outlet/>}
          </UserContext.Provider>
        </Provider>
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
      },
      {
        path: "/cart", 
        element: <Cart/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// root.render(<HeadingComponent></HeadingComponent>); //also componect call like this
// root.render(HeadingComponent()); //also componect call like this

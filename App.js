import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
      <Body/>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(<HeadingComponent></HeadingComponent>); //also componect call like this
// root.render(HeadingComponent()); //also componect call like this

import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("h1",{id:'heading',xyz:'abc'},"namaste react in js");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
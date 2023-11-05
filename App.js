import React from "react";
import ReactDOM from "react-dom/client";
const Title = ()=>{
        <h2 className="head" tabIndex="5">Namaste React Using jsx</h2>
}
// const HeadingComponent = ()=><div id="container">{Title} <h1 className="heading">Namaste React Functional Component</h1></div> //alternate of below code

const HeadingComponent = ()=>{
        return(<div id="container">
                {Title}
                <h1 className="heading">Namaste React Functional Component</h1>
        </div>)
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
// root.render(<HeadingComponent></HeadingComponent>); //also componect call like this
// root.render(HeadingComponent()); //also componect call like this
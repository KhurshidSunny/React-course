import React from "react";
import  ReactDOM from "react-dom";
import Header from "./organizing component/Header";
import Body from "./organizing component/Body";
import Footer from "./organizing component/Footer";
import index from "./organizing component/index.css";

function MyComponent(){
    return (
        <div> 
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById("root")
)
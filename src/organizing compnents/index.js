import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"


function MyComponents(){
    return (
        <div> 
            <Header />
           
        </div>
    )
}

ReactDOM.render(
    <MyComponents />,
    document.getElementById("root")
)


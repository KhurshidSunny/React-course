// Challenge nunber two
// doing it imperatively


// let h = document.createElement("h1");
// h.textContent ="This is just imperative using vanilla javaScript"
// h.className = "header";
// document.getElementById("root").append(h);

// doing it declaratively
// const element = <h1 className="header">This is JSX</h1>
ReactDOM.render(
    // if you want to add more elements then you can't directly do it one after other in fact you will have to 
    // have a div or any parent elemnt
    <div> 
<h1>This is JSX</h1>
<p>This is paragraph in the same render but in div</p>
</div>,
document.getElementById("root"));
// console.log(element);


// we can do the above task in one more way that is to store the prent in a vairable
const page = (
    <div>
        <h1>This is JSX se</h1>
        <p>This is whole div is stored in variable</p>
</div>
)
ReactDOM.render(page, document.getElementById("root"));





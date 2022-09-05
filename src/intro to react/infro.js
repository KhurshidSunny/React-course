// ReactDOM.render(<h1>My first Line of code in React!</h1>, document.getElementById("root"));

// ReactDOM.redner(<p>This is some sample text about the above title.</p>, document.getElementById("content"));

// surprise practice test 

// challenge number 1
// ReactDOM.render(<li>Home</li> document.getElementById("challenge")); // this is my method to do it 
// ReactDOM.render(<li>About Us</li>, document.getElementById("challenge")); challenge id was create inside html file but it is removed 

// ReactDOM.render(<ul> <li>Home</li> <li>About Us</li> <li>Contact</li> </ul> , document.getElementById("root"));

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
    
}

// ReactDOM.render(<h2>Hello React</h2>, document.getElementById("root"))

function MyContent(){
    return (
        <h1>Learning React</h1>
    )
}


ReactDOM.render(
    <div>
        < NavBar/>
        <MyContent />
    </div>,
    document.getElementById("root")

)
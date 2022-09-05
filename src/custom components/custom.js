// to build costum commpnents we make function and then all them whereever we needed to used 
function Mywebsite(){
    return (
        <div>
            <img src="logo.png" width="50px"></img>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterpirse apps, including mobile apps</li>
            </ul>
        </div>
    )
}

// now render this on screen
// ReactDOM.render(
//     <Mywebsite />,
//     document.getElementById("root")
// )

// first part of challenge

// header component 

// another Mini challenge 

function Header(){
    return (
        <header>
            <nav className="nav"> 
            <img src="logo.png" className="image"></img>

            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
    )
}

// Reasons ( the ordered list ) compnonet 
function Body(){
    return (
        <div className="mainContent"> 
            <h1>Reasons I'm excited to learn React</h1>
            <ol className="reasons" type="i">
                <li>React makes it easy and managable</li>
                <li>Brings a good reusibility</li>
                <li>want to gain more knowledge by using React</li>
                <li>It is a good skill</li>
                <li>Demanded in market highly</li>
            </ol>
        </div>
    )
}

// footer component 
function Footer() {
    return (
        <footer className="footer">
            <small>&copy; 2022 GHA Development. All rights reserved.</small>
        </footer>
    )
}

//  adding all components here in the parent componnet which is a website
function Reasons(){
    return (
        <div>
            {/* <header>
                <nav>
                    <img src="logo.png" width="60px"></img>
                </nav>
            </header> */}

            <Header/>
            <Body />
            <Footer/>
           
        </div>
    )
}

// render this on screen

ReactDOM.render(
    < Reasons />,
    document.getElementById("challenge4")
)


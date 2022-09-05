ReactDOM.render(
    <nav>
        <h1>Foody Center</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>,document.getElementById("root")
    )

    const page = (
        <div> 
        <h2>This is the intro</h2>
        <p>outlines</p>
        <ul>
            <li>course intro</li>
            <li>advanced topics</li>
            <li>challenges</li>
            <li>certification</li>
        </ul>
        <img src="fav.jfif"></img>
        </div>
    )

    // document.getElementById("root1").append(page);
    // document.getElementById("root1").append(JSON.stringify(page));

        // when we use append method so the browser doesn't indentify and it only shows javaScript objects
        // so to fix the above problem we must use .render() 
        ReactDOM.render(page, document.getElementById("root1"))
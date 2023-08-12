import React from "react";
import img1 from "../images/icon1.png";
import img2 from "../images/icon2.png";
import img3 from "../images/icon3.png";
import img4 from "../images/icon4.png";

function Footer () {
    return (
        <footer className="App-footer">
        <div>
            <img className="image" alt="Image1" src={img1}></img>
            <p>Declarative</p>
            <p>React makes it painless to create interactive UIs</p>
        </div>

        <div>
            <img className="image" alt="Image2" src={img2}></img>
            <p>components</p>
            <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
            <img className="image" alt="Image3" src={img3}></img>
            <p>Single-Way</p>
            <p>A set of immutable values are passed to the components</p>
        </div>

        <div>
            <img className="image" alt="image4" src={img4}></img>
            <p>JSX</p>
            <p>Statically-typed designed to run on modern browsers.</p>
        </div>

        </footer>
    )
}

export default Footer;
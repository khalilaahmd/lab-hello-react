import React from "react";
import ironHackLogo from '../images/ironhack-logo-xs.png';
import menuTop from '../images/menu-top-xs.png';

function Header () {
    return (
        <header className="App-Header">
        <div>
            <img className="image" alt="Ironhack Logo" src={ironHackLogo}></img>
        </div>

        <div>
            <img className="image" alt="Menu Top" src={menuTop}></img>
        </div>
        </header>
    )
}

export default Header;
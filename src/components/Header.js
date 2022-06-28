import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import './About.css';
import About from "./About"
import foodlogo5 from './foodlogo1.png';

const togglemenu = () => {
    let navId = document.getElementById("navid");
    if (navId.style["display"] === "none") {
        navId.style["display"] = "flex";
        navId.style["height"] = "127px";
        navId.style["transition"] = "2s";
    }
    else {
        navId.style["display"] = "none";
        navId.style["height"] = "0px";
        navId.style["transition"] = "2s";
    }
};

const Header = ({ setLoginUser }) => {

    const navigate = useNavigate();
    const logout = () => {
        if (window.confirm("Do you want to logout?")) {
            setLoginUser({});
            navigate("/");
        }
        else {
            console.log("clicked by mistake.");
        }
    };

    return (
        <>
            < div id="header" >
                <div id="hamid" className="hamdiv" onClick={togglemenu}><i className="hamburger fa-solid fa-bars"></i></div>
                <nav id="navid">
                    <ul>
                        <li><Link className="navitem" to="/home">Home</Link></li>
                        <li><Link className="navitem" to="/add-recipe">Add Recipe</Link></li>
                        <li><Link className="navitem" to="/all-recipe">All Recipes</Link></li>
                        <li><Link className="navitem" to="/feedback">Feedback</Link></li>
                    </ul>
                </nav>
                <div className="logoutButton" onClick={logout} >Logout</div>
            </div >
        </>

    )
}

export default Header;


export const Poster = () => {

    return (
        <>
            <div className="poster" >
                <div className="centerContent">
                    <div className="headingbox" >
                        <img id="cook" src={foodlogo5} alt="cookfood" />
                        <span className="foodysite">Foodysite</span>
                    </div>
                    <span className="hey">Hey! Your Recipe search ends here.</span>
                </div>
                <About />
            </div>
        </>
    )
};




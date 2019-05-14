import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from "../../images/mobbid logo.svg";
import PlayStoreImage from "../../images/download-google-play(1).png";


const Navbar = (props)=> {

let links = [
    {to: "/", item: "home"},
    {to: "/pages/Works/", item: "how it works"},
    {to: "/pages/Customer/", item: "customer stories"},
    {to: "/pages/About/", item: "about us"},
    {to: "/pages/Blog/", item: "blog"},
]
    console.log(props)
    return (
        <div className="nav">
            <div className="nav__logo-container">
                <img className="nav__logo" src={Logo} alt="Logo" />
            </div>

            <ul className="nav__list">
                {links.map( link => <li className="nav__item" key={link.item}>
                    <NavLink className="nav__link" to={link.to}> {link.item} </NavLink> </li>
                )} 
            </ul>

            <div className="nav__playstore-container">
                <img className="nav__playstore" src={PlayStoreImage} alt="playstore-img" />
            </div>
        </div>
    )
}

export default withRouter(Navbar);
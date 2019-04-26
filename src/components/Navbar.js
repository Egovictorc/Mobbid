import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from "../images/mobbid logo.svg";
import PlayStoreImage from "../images/download-google-play(1).png";


const Navbar = (props)=> {

    console.log(props)
    return (
        <div className="nav">
            <div className="nav__logo-container">
                <img className="nav__logo" src={Logo} alt="Logo" />
            </div>

            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/">Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/pages/About/">About</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/pages/contact/">contact us</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/pages/Blog/">blog</NavLink>
                </li>
            </ul>

            <div className="nav__playstore-container">
                <img className="nav__playstore" src={PlayStoreImage} alt="playstore-img" />
            </div>
        </div>
    )
}

export default withRouter(Navbar);
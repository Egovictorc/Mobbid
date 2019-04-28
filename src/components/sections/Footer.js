import React from 'react';
import { NavLink } from 'react-router-dom'; 
import LazyLoad from 'react-lazyload';
import Logo from '../../images/logo_bgWhite.png';
import Facebook from '../../images/facebook2 2.png';
import Twitter from '../../images/twitter.png';
import Instagram from '../../images/instagram(1).png';

const Footer = ()=> {

    return (
        <footer className="footer">
            <div className="footer__div footer__div--social">
                <div className="footer__logo-container">
                <img className="footer__logo" src={Logo} alt="Mobbid logo" />
                </div>
                <ul className="footer__list">
                    <li className="footer__item">
                        <NavLink className="footer__link" to="" title="Facebook">
                            <img src={Facebook} alt="Facebook" />
                        </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="" title="Twitter">
                        <img src={Twitter} alt="Twitter" />
                        </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="" title="Instagram">
                        <img className="footer__instagram" src={Instagram} data-type="footer-instagram" alt="Instagram"  />
                        </NavLink>
                    </li>
                </ul>
                
            </div>

            <div className="footer__div footer__div--link">
               
                <ul className="footer__list">
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/">support</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/">privacy</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/pages/Blog/">blog</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/pages/about/">about us</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__link" to="/">careers</NavLink>
                    </li>
                </ul>

                <p className="footer__par">2019 Mobbid technologies</p>
            </div>
        </footer>
    )
}

export default Footer;
import React from "react";
import { NavLink } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Logo from "../../images/logo_bgWhite.png";
import Facebook from "../../images/facebook2 2.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram(1).png";

const Footer = () => {
  let socialLinks = [
      {
        to: "",
        title: "Facebook",
        src: Facebook,
        alt: "Facebook",
        imgClass: ""
      },
      { to: "", title: "Twitter", src: Twitter, alt: "Twitter", imgClass: "" },
      {
        to: "",
        title: "Instagram",
        src: Instagram,
        alt: "Instagram",
        imgClass: "footer__instagram"
      }
    ],
    pageLinks = [
      { to: "/", name: "support" },
      { to: "/", name: "privacy" },
      { to: "/pages/Blog/", name: "blog" },
      { to: "/pages/About/", name: "about us" },
      { to: "/", name: "careers" }
    ];

  return (
    <footer className="footer">
      <div className="footer__div footer__div--social">
        <div className="footer__logo-container">
          <img className="footer__logo" src={Logo} alt="Mobbid logo" />
        </div>
        <ul className="footer__list">
          {socialLinks.map(link => (
            <li className="footer__item">
              <NavLink className="footer__link" to={link.to} title={link.title}>
                <img
                  src={link.src}
                  alt={link.alt}
                  className={link.imgClass}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__div footer__div--link">
        <ul className="footer__list">
          {pageLinks.map(link => (
            <li className="footer__item">
              <NavLink className="footer__link" to={link.to}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <p className="footer__par">2019 Mobbid technologies</p>
      </div>
    </footer>
  );
};

export default Footer;

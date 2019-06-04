import React from "react";
import { NavLink } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Logo from "../../images/logo_bgWhite.png";
import Facebook from "../../images/facebook2 2.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram(1).png";
// import Instagram from "../../images/instagram-2.png";

const Footer = () => {
  let socialLinks = [
      {
        to: "https://www.facebook.com/mobbidride",
        title: "Facebook",
        src: Facebook,
        alt: "Facebook",
        imgClass: ""
      },
      { to: "https://www.twitter.com/mobbidride", title: "Twitter", src: Twitter, alt: "Twitter", imgClass: "" },
      {
        to: "https://instagram.com/mobbidride",
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
            <li className="footer__item" key={link.alt}>
              <a href={link.to} className="footer__link footer__link--social" title={link.title}>
                <img
                  src={link.src}
                  alt={link.alt}
                  className={link.imgClass}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__div footer__div--link">
        <ul className="footer__list">
          {pageLinks.map(link => (
            <li className="footer__item" key={link.name}>
              <NavLink className="footer__link footer__link--pages" to={link.to}>
                {link.name}
                {/* NAV INDICATOR */}
                <span className="footer__ind"> </span>
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

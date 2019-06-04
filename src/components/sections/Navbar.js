import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Logo from "../../images/mobbid logo.svg";
import PlayStoreImage from "../../images/download-google-play(1).png";

const NavCollapse = ({ ischecked, handleChecked, width, setWidth }) => {

  //TOGGLE NAVIGATION
  useEffect(() => {
    let navList = document.getElementById("nav__list");
    setWidth(window.innerWidth);
    if (width < 700) {
      // console.log("width ", width);
      if (ischecked) {
        navList.style.width = "100vw";
        
      } else {
        ///HERE WAS THE PROBLEM //HAS BEEN RESOLVED
        navList.style.width = 0;
      }
    }
  }, [ischecked]);

  useEffect(() => {
    let navList = document.getElementById("nav__list");
    if (width <= 701) {
      navList.style.width = 0;
      if (ischecked) {
        handleChecked(false);
      }
    } else {
      navList.style.width = "auto";
    }
  }, [width]);

  return (
    <div className="nav__collapse" onClick={handleChecked}>
      {/* Toggle navigation bg */}
      
      
      {/* //Toggle navigation menu */}
      <input
        type="checkbox"
        checked={ischecked}
        onChange={handleChecked}
        className="nav__toggler"
      />
      <div className="nav__collapse--bg" ></div>
      {/* Navigation icon */}
      <div className="nav__collapse--icon-cont">
        <span className="nav__collapse--icon" />
        {/* <span className="nav__collapse--icon nav__collapse--icon-top" />
        <span className="nav__collapse--icon nav__collapse--icon-middle" />
        <span className="nav__collapse--icon nav__collapse--icon-bottom" /> */}
      </div>
    </div>
  );
};

const Navbar = props => {
  const [ischecked, setChecked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  //  CHECK WINDOW WIDTH AND SET WIDTH
  window.onresize = () => {
    let newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  const handleChecked = e => {
    setWidth(window.innerWidth);
    if (width < 700) {
      console.log("width ", width);
      setChecked(!ischecked);
      console.log("width: ", window.innerWidth);
    } else {
      setChecked(false);
    }
  };

  let links = [
    { to: "/", item: "home" },
    { to: "/pages/Works/", item: "how it works" },
    { to: "/pages/Customer/", item: "customer stories" },
    { to: "/pages/About/", item: "about us" },
    { to: "/pages/Blog/", item: "blog" },
    ///TESTING FORM COMPONENT
    { to: "/form/FormPage/", item: "form" }
  ];
  // console.log(props);

  return (
    <div className="nav">
      <div className="nav__logo-container">
        <img className="nav__logo" src={Logo} alt="Logo" />
      </div>

      <NavCollapse
        ischecked={ischecked}
        width={width}
        setWidth={setWidth}
        handleChecked={handleChecked}
      />
      {/* Navigation list */}
      <ul className="nav__list" id="nav__list">
        {links.map(link => (
          <li className="nav__item" key={link.item}>
            <NavLink className="nav__link" to={link.to} onClick={handleChecked}>
              {" "}
              {link.item}{" "}
              <span className="nav__ind"> </span>
            </NavLink>{" "}

            {/* HERE */}
            
          </li>
        ))}
      </ul>

      <div className="nav__playstore-container">
        <img
          className="nav__playstore"
          src={PlayStoreImage}
          alt="playstore-img"
        />
      </div>
    </div>
  );
};

export default withRouter(Navbar);

import React from "react";
import LazyLoad from "react-lazyload";
import Shield from "../../images/shield.png";
import Protection from "../../images/protection.png";
import Group from "../../images/group.png";
import GooglePlay from "../../images/download-google-play(1).png";
import AppStore from "../../images/download-app-store.png";

export const Experience = () => {
  return (
    <section className="section experience">
      <h2 className="section__heading experience__heading">the mobbid experience</h2>

      <div className="experience__div--container">
        <div className="experience__div">
          <div className="experience__img--container">
            <img className="experience__img" src={Shield} alt="img" />
          </div>

          <h3 className="experience__div--heading">safe</h3>
          <p className="experience__par">
            vehicle checks on every vehicle and valid licence is required for
            all users
          </p>
        </div>

        <div className="experience__div">
          <div className="experience__img--container">
            <img className="experience__img" src={Protection} alt="img" />
          </div>

          <h3 className="experience__div--heading">one-chance free</h3>
          <p className="experience__par">
            you won't get kidnapped during your trips because every trip is
            monitored closely and all riders must have s guarantor
          </p>
        </div>

        <div className="experience__div">
          <div className="experience__img--container">
            <img className="experience__img" src={Group} alt="img" />
          </div>
          <h3 className="experience__div--heading">reliable</h3>
          <p className="experience__par">
            mobbid makes sure your experience during any trip is pleasant
          </p>
        </div>
      </div>
    </section>
  );
};

export const Improve = () => {
  return (
    <div className="improve">
      <h2 className="improve__heading section__heading">no more stress, improve your commute</h2>
      <div className="improve__download">
        
          <div className="improve__img--container">
          <img className="improve__download--img" src={GooglePlay} alt="Google Play" />
          </div>
          <div className="improve__img--container">
          <img className="improve__download--img" src={AppStore} alt="App Store" />
          </div>
        
      </div>
    </div>
  );
};
export default Experience;

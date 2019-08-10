import React, { useState } from "react";
import LazyLoad from "react-lazyload";

import Shield1x from "../../../images/shield@1x.png";
import Shield2x from "../../../images/shield@2x.png";
import Protection1x from "../../../images/protection@1x.png";
import Protection2x from "../../../images/protection@2x.png";
import Medal1x from "../../../images/medal@1x.png";
import Medal2x from "../../../images/medal@2x.png";
import GooglePlay1x from "../../../images/google-play@1x.png";
import GooglePlay2x from "../../../images/google-play@2x.png";
import AppStore1x from "../../../images/app-store@1x.png";
import AppStore2x from "../../../images/app-store@2x.png";

// const Shield1x = React.lazy( ()=> import('../../../../images/shield@1x.png'))
// const Shield2x = React.lazy( ()=> import('../../../../images/shield@2x.png'));
// const Protection1x = React.lazy( ()=> import('../../../../images/protection@1x.png'))
// const Protection2x = React.lazy( ()=> import('../../../../images/protection@2x.png'));
// const Medal1x = React.lazy( ()=> import("../../../../images/medal@1x.png"));
// const Medal2x = React.lazy( ()=> import("../../../../images/medal@2x.png"));
// const GooglePlay1x = React.lazy( ()=> import("../../../../images/google-play@1x.png"));
// const GooglePlay2x = React.lazy( ()=> import("../../../../images/google-play@1x.png"));
// const AppStore1x = React.lazy( ()=> import("../../../../images/app-store@1x.png"));
// const AppStore2x = React.lazy( ()=> import("../../../../images/app-store@1x.png"));

// const experienceData = [
//   {className: }
// ]

export const Experience = () => {
  return (
    <section className="section experience">
      <h2 className="section__heading experience__heading">
        the mobbid experience
      </h2>

      <div className="experience__div--container">
        <div className="experience__div experience__safe">
          <div className="experience__img--container">
            <img
              className="experience__img"
              srcSet={`${Shield2x} 144w, ${Shield1x} 72w`}
              sizes="(min-width: 550px), (max-width: 549px)"
              src={Shield1x}
              alt="Mobbid shield"
            />
          </div>

          <h3 className="experience__div--heading heading-3">safe</h3>
          <p className="experience__par article__par">
            vehicle checks on every vehicle and valid licence is required for
            all users
          </p>
        </div>

        <div className="experience__div experience__free">
          <div className="experience__img--container">
            <img
              className="experience__img"
              srcSet={`${Protection2x} 144w, ${Protection1x} 72w`}
              sizes="(min-width: 550px), (max-width: 549px)"
              src={Protection1x}
              alt="Mobbid Protection"
            />
          </div>

          <h3 data-type="chance" className="experience__div--heading heading-3">
            one-chance free
          </h3>
          <p className="experience__par article__par">
            you won't get kidnapped during your trips because every trip is
            monitored closely and all riders must have a guarantor
          </p>
        </div>

        <div className="experience__div experience__reliable">
          <div className="experience__img--container">
            <img
              className="experience__img"
              srcSet={`${Medal2x} 144w, ${Medal1x} 72w`}
              sizes="(min-width: 550px), (max-width: 549px)"
              src={Medal1x}
              alt="Mobbid medal"
            />
          </div>
          <h3 className="experience__div--heading heading-3">reliable</h3>
          <p className="experience__par article__par">
            mobbid makes sure your experience during any trip is pleasant
          </p>
        </div>
      </div>
    </section>
  );
};

export const Improve = () => {
  const data = [
    {
      imgClass: "improve__download--img",
      srcSet: `${GooglePlay2x} 404w, ${GooglePlay1x} 202w`,
      sizes: "(min-width: 550px), (max-width: 549px)",
      src: GooglePlay1x,
      alt: "Google Play"
    },

    {
      imgClass: "improve__download--img",
      srcSet: `${AppStore2x} 404w, ${AppStore1x} 202w`,
      sizes: "(min-width: 550px), (max-width: 549px)",
      src: AppStore1x,
      alt: "App Store"
    }
  ];

  return (
    <div className="improve">
      <h2 className="improve__heading section__heading">
        no more stress, improve your commute
      </h2>
      <div className="improve__download">

        {data.map( item =>  
        <div className="improve__img--container" key={item.alt}>
          <img className={item.imgClass} srcSet={item.srcSet} sizes={item.sizes} src={item.src} alt={item.alt} />

        </div>
        ) }

        {/* Remove later */}
        {/* <div className="improve__img--container">
          <img
            className="improve__download--img"
            srcSet={`${GooglePlay2x} 404w, ${GooglePlay1x} 202w`}
            sizes="(min-width: 550px), (max-width: 549px)"
            src={GooglePlay1x}
            alt="Google Play"
          />
        </div>

        <div className="improve__img--container">
          <img
            className="improve__download--img"
            srcSet={`${AppStore2x} 404w, ${AppStore1x} 202w`}
            sizes="(min-width: 550px), (max-width: 549px)"
            src={AppStore1x}
            alt="App Store"
          />
        </div> */}
      </div>
    </div>
  );
};
export default Experience;

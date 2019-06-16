import React from "react";
import LazyLoad from "react-lazyload";
import PlaceHolder from './placeHolder';
///IMPORTING IMAGES
import Community1x from "../../../../images/community@1x.png";
import Community2x from "../../../../images/community@2x.png";

import Ride1x from "../../../../images/Schedule a ride@1x.png";
import Ride2x from "../../../../images/Schedule a ride@2x.png";
import Pair1x from "../../../../images/agreement@1x.png";
import Pair2x from "../../../../images/agreement@2x.png";
import EnjoyRide1x from "../../../../images/relaxation@1x.png";
import EnjoyRide2x from "../../../../images/relaxation@2x.png";


// const Community1x = React.lazy( ()=> import('../../../../images/community@1x.png'))
// const Community2x = React.lazy( ()=> import('../../../../images/community@2x.png'));
// const Ride1x = React.lazy( ()=> import('../../../../images/Schedule a ride@1x.png'))
// const Ride2x = React.lazy( ()=> import('../../../../images/Schedule a ride@2x.png'));
// const Pair1x = React.lazy( ()=> import("../../../../images/agreement@1x.png"));
// const Pair2x = React.lazy( ()=> import("../../../../images/agreement@2x.png"));
// const EnjoyRide1x = React.lazy( ()=> import("../../../../images/relaxation@1x.png"));
// const EnjoyRide2x = React.lazy( ()=> import("../../../../images/relaxation@1x.png"));


export const Work = () => {


  return (
    <div className="section__work work">
      <h2 className="section__heading work__heading">here is how it works</h2>
      <div className="work__div work__community">
        <article className="work__article article">
          <h3 className="work__article--heading article__heading">
            join a community of commuters
          </h3>
          <p className="work__article--par article__par">
            download the market app and get matched with exciting people going
            your way, either to work or for short distance travel
          </p>
        </article>

        <div className="work__img--container ">
        
            <LazyLoad height={150} offset={300}  debounce={false}>
            <img className="work__img" 
            
            srcSet={ `${Community2x} 1048w, ${Community1x} 524w`}
            sizes="(min-width: 550px), (max-width: 549px)" 
            src={Community1x}
             alt="Mobbid Community" />
          </LazyLoad>
        
        </div>
      </div>

      {/* SCHEDLUE A RIDE */}
      <div className="work__div section__ride ride">
        <div className="work__img--container ride__img--container work__order--1">
        
          <LazyLoad height={150} offset={300}  debounce={false}>
                <img className="work__img" 
                srcSet={ `${Ride2x} 760w, ${Ride1x} 380w`}
                sizes="(min-width: 550px), (max-width: 549px)"
                src={Ride1x} alt="Mobbid Ride" />
          </LazyLoad>
        
        </div>

        <article className="work__article article">
          <h3 className="work__article--heading article__heading">
            schedule a ride
          </h3>
          <p className="work__article--par article__par">
            with your work and home location preset, choose preferred time and
            get matched with a commuter close to you.
          </p>
        </article>
      </div>

      {/* GET PAIRED */}
      <div className="work__div pair__community">
        <article className="work__article article">
          <h3 className="work__article--heading article__heading">
            get paired
          </h3>
          <p className="work__article--par article__par">
            mobbid would help you select from a pool of available commuters
            going your way
          </p>
        </article>

        <div className="work__img--container work__img--container">
        
          <LazyLoad height={150} offset={300} debounce={false}>
            <img className="work__img" 
            srcSet={ `${Pair2x} 566w, ${Pair1x} 283w`}
            sizes="(min-width: 550px), (max-width: 549px)" 
            src={Pair1x} alt="Mobbid Pair" />
          </LazyLoad>
          
        </div>
      </div>

      {/* ENJOY THE RIDE */}
      <div className="work__div section__enjoy-ride enjoy-ride">
        <div className="work__img--container enjoy-ride__img--container work__order--1">
        
          <LazyLoad height={150} offset={300}  debounce={false}>
            <img className="work__img" 
            srcSet={ `${EnjoyRide2x} 600w, ${EnjoyRide1x} 300w`}
                sizes="(min-width: 550px), (max-width: 549px)"
                src={EnjoyRide1x} alt="Mobbid enjoy-ride" />
          </LazyLoad>
        
        </div>

        <article className="work__article article">
          <h3 className="work__article--heading article__heading">
            relax and enjoy the ride
          </h3>
          <p className="work__article--par article__par">
            it's always fun to ride with mobbid, meet new friends and have a
            great discussion
          </p>
        </article>
      </div>
    </div>
  );
};

export default Work;

import React from 'react';
import LazyLoad from 'react-lazyload';
///IMPORTING IMAGES
import Community from "../../../../images/community@2x.png";
import Ride from "../../../../images/Schedule a ride.png";
import Pair from "../../../../images/undraw_agreement_aajr.png";
import EnjoyRide from "../../../../images/undraw_relaxation_1_wbr7.png";


export const Work = () => {
    return (
        <div className="section__work work">
            <h2 className="section__heading work__heading">here is how it works</h2>
            <div className="work__div work__community">
                <article className="work__article article">
                    <h3 className="work__article--heading article__heading">join a community of commuters</h3>
                    <p className="work__article--par article__par">download the market app and get matched with exciting people going your way, either to work or for short distance travel</p>
                </article>

                <div className="work__img--container ">
                    <LazyLoad height={100} offset={50}>
                    <img className="work__img" src={Community} alt="Communityunity" />
                    </LazyLoad>
                </div>
            </div>

            {/* SCHEDLUE A RIDE */}
            <div className="work__div section__ride ride">
                
            <div className="work__img--container ride__img--container work__order--1">
                    <LazyLoad height={100} offset={50}>
                    <img className="work__img" src={Ride} alt="Ride" />
                    </LazyLoad>
                </div>

                <article className="work__article article">
                    <h3 className="work__article--heading article__heading">schedule a ride</h3>
                    <p className="work__article--par article__par">
                        with your work and home location preset, choose preferred time and get matched with a commuter close to you.
                    </p>
                </article>
            </div>

            {/* GET PAIRED */}
            <div className="work__div pair__community">
                <article className="work__article article">
                    <h3 className="work__article--heading article__heading">get paired</h3>
                    <p className="work__article--par article__par">mobbid would help you select from a pool of available commuters going your way</p>
                </article>

                <div className="work__img--container work__img--container">
                    <LazyLoad height={100} offset={50}>
                    <img className="work__img" src={Pair} alt="Pair" />
                    </LazyLoad>
                </div>
            </div>

            {/* ENJOY THE RIDE */}
            <div className="work__div section__enjoy-ride enjoy-ride">
                
            <div className="work__img--container enjoy-ride__img--container work__order--1">
                    <LazyLoad height={100} offset={50}>
                    <img className="work__img" src={EnjoyRide} alt="img__enjoy-ride" />
                    </LazyLoad>
                </div>

                <article className="work__article article">
                    <h3 className="work__article--heading article__heading">relax and enjoy the ride</h3>
                    <p className="work__article--par article__par">
                        it's always fun to ride with mobbid, meet new friends and have a great discussion
                    </p>
                </article>
            </div>


        </div>
    )
}

export default Work;
import React, { Fragment } from "react";
//import Mobbid from "./sections/Sections";
import LazyLoad from 'react-lazyload';
import Sections from "./sections/Sections.js";

//  const Definition  = React.lazy( () => import('./sections/Sections'));

//  const Work = LazyLoad( ()=> import('./sections/Sections'))
//  const Work = React.lazy( ()=> import("./sections/Sections.js"));

const Home = props => {
  console.log(props);

  return (
    <Fragment>
      <div className="header">
        <h1 className="header__heading ">
          comfort and convenience <span>on rides to work</span>
        </h1>
        <p className="header__ride">
          schedule ride with friends, co-workers and neighbours
        </p>
        <div className="header__input-container">
          <input
            className="header__input"
            type="phone"
            name="phone"
            placeholder="Enter Phone Number"
          />
          <button className="header__button"> schedule a ride</button>
        </div>
      </div>
      <React.Suspense fallback="Loading ...">
      
          <LazyLoad height="100" offset="50">
            <Sections />
          </LazyLoad>
      </React.Suspense>
{/* 
      <React.Lazy  >
        <Mobbid />
      </React.Lazy> */}
    </Fragment>
  );
};

export default Home;

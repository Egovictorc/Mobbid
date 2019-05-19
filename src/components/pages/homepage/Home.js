import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { withFormik, Field } from 'formik';
import Sections from "./sections/Sections.js";
import HomeForm from './HomeForm';
import { asyncCreateUser } from '../../actionCreators/ActionCreators';
import { connect } from 'react-redux';


const Home = props => {
  // console.log(props.match.params.id);

  return (
    <Fragment>
      <div className="header">
        <h1 className="header__heading ">
          comfort and convenience on rides to work
        </h1>
        <p className="header__ride">
          schedule ride with friends, co-workers and neighbours
        </p>

        <HomeForm createUser={props.createUser} />
        {/* <div className="header__input-container">
          <input
            className="header__input"
            type="phone"
            name="phone"
            placeholder="Enter Phone Number"
          />
          <input
            className="header__input"
            type="phone"
            name="phone"
            placeholder="Enter Phone Number"
          />

          <button className="header__button"> schedule a ride</button>
          
        </div> */}
      </div>
      {/* <React.Suspense fallback="Loading ...">
            <Sections />
      </React.Suspense> */}

      <LazyLoad height={70}>
        <Sections />
      </LazyLoad>

    </Fragment>
  );
};

// const mapDispatchToProps = (dispatch)=> {
//   return ({
//     createUser: (user) => dispatch ({type: "CREATE_USER", payload: user }) 
//   })
// }

const mapDispatchToProps = {asyncCreateUser};

const connectedHome = connect(null, mapDispatchToProps)(Home);

export default connectedHome;
import React, { Fragment, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { withFormik, Field } from 'formik';
import Sections from "./sections/Sections.js";
// import HomeForm from './HomeForm';
import HomeForm from './ReduxForm';
import * as modal from './HomeModal';
import { asyncCreateUser, increment } from '../../actionCreators/ActionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = {asyncCreateUser, increment};



const Home = props => {
  // console.log(props.match.params.id);
  // console.log(props.increment)
  // const { increment } = props;

useEffect(
  ()=>{props.increment()}, []
)

const Context = React.createContext();
  return (
    <Fragment>
      <div className="header">
        <h1 className="header__heading ">
          comfort and convenience on rides to work
        </h1>
        <p className="header__ride">
          schedule ride with friends, co-workers and neighbours
        </p>
        
        <HomeForm createUser={props.asyncCreateUser} />
        
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



const connectedHome = connect(null, mapDispatchToProps)(Home);

export default connectedHome;
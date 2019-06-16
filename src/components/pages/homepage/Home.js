import React, { Fragment, useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { withFormik, Field } from 'formik';
import Sections from "./sections/Sections.js";
import HomeForm from './HomeForm';
import SendingRequest from './SendingRequest';
// import HomeForm from './ReduxForm';
// import OrdForm from './OrdForm';
import * as Modal from './HomeModal';

import { asyncCreateUser, increment } from '../../actionCreators/ActionCreators';
import { connect } from 'react-redux';
import ErrorBoundary from '../../ErrorBoundary';

const mapDispatchToProps = {asyncCreateUser, increment};


const Home = props => {
  const [modal, setModal] = useState(false)
  // const { increment } = props;
const handleModal = ()=> {
  setModal(true)
}

const [isSending, setSending ] = useState(false);
const handleSending = (val)=>{
  setSending(val)
}

  return (
     <Fragment>
      <ErrorBoundary>
      <header className="header">
        <h1 className="header__heading ">
          comfort and convenience on rides to work
        </h1>
        <p className="header__ride">
          schedule ride with friends, co-workers and neighbours
        </p>
        
        { isSending ? (<SendingRequest sending={handleSending} />) : (<HomeForm sending={handleSending} />) }
        {/* {modal && <modal.success />} */}
        <Modal.success />
                
      </header>
      {/* <React.Suspense fallback="Loading ...">
            <Sections />
      </React.Suspense> */}

      <LazyLoad height={70}>
        <Sections />
      </LazyLoad>
      
      </ErrorBoundary>
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
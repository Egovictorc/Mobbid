import React from "react";
import Layout from "../../components/Layout";

import FormFormik from "./FormFormik";
// import traffic from "../../images/traffic.png";
import { connect } from 'react-redux';

const mapStateToProps = (state)=> {
  const { users } = state.rootReducer;
  return users[0]
}


const FormContainer = props => {
// console.log("form_container: ", props)

  return (
    <Layout title="Get Ride">
    <div className="getRide getRide--cont">
      <div className="getRide__div">
        <h2 className="getRide__heading"> riding to work should be <span className="capitalise">fun</span> and <span className="capitalise"> comfortable</span> and <span className="capitalise"> stress-free </span> </h2>
        <p className="getRide__paragraph">
          Share available car spaces with friends, neigbours and co-workers so
          you never have to go through stress during your work commutes.
        </p>

        <FormFormik />
      </div>

      <div className="getRide__img--cont">
        {/* <img src={traffic} alt="traffic" className="getRide__img" /> */}
      </div>

    </div>
    </Layout>
  );
};



export default connect(mapStateToProps)(FormContainer);

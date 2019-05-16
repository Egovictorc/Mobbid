import React from "react";
import FormFormik from "./FormFormik";
import traffic from "../../images/traffic.png";

const FormContainer = props => {

  return (
    <div className="getRide getRide--cont">
      <div className="getRide__div">
        <h2 className="getRide__heading section__heading"> riding to work should be fun and comfortable and stress-free</h2>
        <p className="getRide__paragraph">
          Share available car spaces with friends, neigbors and co-workers so
          you never have to go through stress during your work commutes.
        </p>

        <FormFormik />
      </div>

      <div className="getRide__img--cont">
        <img src={traffic} alt="traffic" className="getRide__img" />
      </div>

    </div>
  );
};

export default FormContainer;

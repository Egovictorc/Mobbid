import React from "react";
import { withFormik, Field } from "formik";

import * as Yup from "yup";

const renderInput = ({ field, form: {touched, errors}, ...props }) => {
  console.log("props: ", props);
  console.log("field: ", field);
  // console.log("form: ", form);
  return (
    <div className={`getRide__input--cont ${props.classDiv} `}>
      {props.type === "text" && <label className="getRide__label"> {props.label} </label>}
      {/* <label className="getRide__label"> {props.label} </label> */}
      <div >
        <input
          {...field}
          {...props}
          className={props.className}
          placeholder={props.label}
        />
        {touched[field.name] &&
          errors[field.name] && (
              <p className="getRide__error"> {errors[field.name]} </p>
            )
          }
      </div>
    </div>
  );
};

const renderSelect = ({form: {touched, errors}, field, ...props})=> {
  return (
    <div className={`getRide__locations--cont ${props.divClass}`} >
      <label className="getRide__label"> {props.label} </label>
      <div>
      <select {...field} {...props} className={props.className} />
      </div>
    </div>
      
  )
}
//GET LOCATIONS
let homes = ["surulere", "VI", "Lekki", "Mile 2", "oshodi", "ikeja"];
//SORT LOCATION LIST
homes = homes.sort();

const GetRideForm = props => {
  console.log("props: ", props);
  const {
    handleSubmit,
    dirty,
    isSubmitting,
    handleReset,
    values,
    errors
  } = props;

  const btnStyle = {
    cursor: !dirty || isSubmitting ? "not-allowed": "pointer",
    backgroundColor:  !dirty || isSubmitting ? "#c5c2c2": "#2d9cdb",
  } 

  return (
    <form onSubmit={handleSubmit} className="getRide__form">
      <Field
        component={renderInput}
        label="first Name"
        name="firstName"
        type="text"
        className="getRide__input" classDiv="getRide__input--firstName"
      />

      <Field
        component={renderInput}
        label="last Name"
        name="lastName"
        type="text"
        className="getRide__input" classDiv="getRide__input--lastName"
      />

      <Field component={renderSelect} name="home" label="Home" className="getRide__input getRide__locations" divClass="getRide__locations--home">
        <option>Select home location</option>
        {homes.map(home => (
          <option key={home} value={home}> {home} </option>
        ))}
      </Field>

      <Field component={renderSelect} name="work" label="Work" className="getRide__input getRide__locations" divClass="getRide__locations--work">
        <option>Select work location</option>
        {homes.map(home => (
          <option key={home} value={home}>
            {" "}
            {home}{" "}
          </option>
        ))}
      </Field>
      
      <div className="getRide__btn--cont">
      <Field
        component={renderInput}
        name="phoneNumber"
        type="tel"
        label="Phone Number" className="getRide__input" classDiv="getRide__input--phone"
      />
      {/* <input type="tel" /> */}

      <button type="submit" style={ btnStyle } disabled={!dirty || isSubmitting} className="getRide__btn">
        get my free ride
      </button>

      </div>
        {/* <button onClick={handleReset} disabled={!dirty || isSubmitting}>
        clear
      </button> */}
    </form>
  );
};

//MANUAL VALIDATION FOR LENGTH OF PHONE NUMBER
// const validate = values => {
//   let errors = {}
//   if(values.phoneNumber.length < 10) {
//     errors.phoneNumber = "incomplete phone number"
//   }
//   return errors
// }

export default withFormik({
  // validate,
  handleDrag: false,
  validationSchema: Yup.object().shape({
    firstName: Yup.string().min(5, "first name must be up to 5 characters").required("* First name must not be empty"),
    lastName: Yup.string().min(4, "last name must be up to 5 characters").required("* Last name must not be empty"),
    phoneNumber: Yup.number().required("* Phone number must not be empty").typeError("* That doesn't look like a phone number")//.min(5, "* incomplete number")
  })
})(GetRideForm);

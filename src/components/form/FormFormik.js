import React from "react";
import { withFormik, Field } from "formik";

import * as Yup from "yup";

const renderInput = ({ field, form: {touched, errors}, ...props }) => {
  console.log("props: ", props);
  console.log("field: ", field);
  // console.log("form: ", form);
  return (
    <div className="getRide__input--cont">
      {props.type === "text" && <label className="getRide__label"> {props.label} </label>}
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
    <div className="getRide__locations--cont" >
      <label className="form__label"> {props.label} </label>
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

  return (
    <form onSubmit={handleSubmit} className="getRide__form">
      <Field
        component={renderInput}
        label="first Name"
        name="firstName"
        type="text"
        className="getRide__firstName"
      />

      <Field
        component={renderInput}
        label="last Name"
        name="lastName"
        type="text"
        className="getRide__lastName"
      />

      <Field component={renderSelect} name="home" label="Home" className="getRide__locations" data-type="home">
        <option>Select your home location</option>
        {homes.map(home => (
          <option key={home} value={home}> {home} </option>
        ))}
      </Field>

      <Field component={renderSelect} name="work" label="Work" className="getRide__locations" data-type="work">
        <option>Select your Work location</option>
        {homes.map(home => (
          <option key={home} value={home}>
            {" "}
            {home}{" "}
          </option>
        ))}
      </Field>

      <Field
        component={renderInput}
        name="phoneNumber"
        type="tel"
        label="Enter Phone Number" className="getRide__phone"
      />
      {/* <input type="tel" /> */}

      <button type="submit" disabled={!dirty || isSubmitting} className="getRide__btn">
        get my free ride
      </button>
      {/* <button onClick={handleReset} disabled={!dirty || isSubmitting}>
        clear
      </button> */}
    </form>
  );
};

export default withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string().min(5).required("required"),
    lastName: Yup.string().min(4).required("required"),
    phoneNumber: Yup.number().typeError("That doesn't look like a phone number").min(5, "incomplete number")
  })
})(GetRideForm);

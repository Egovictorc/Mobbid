import React from "react";
// import { withFormik, Field } from "formik";
import { reduxForm, Field } from "redux-form";
import { asyncValidate, shouldAsyncValidate } from "redux-form-yup";
import * as Yup from "yup";

const renderInput = props => {
  const {
    label,
    type,
    input,
    meta: { touched, error }
  } = props;

  console.log("props: ", props);
  console.log("input: ", input);
  console.log("errors: ", error);

  return (
    <div>
      {type === "text" && <label> {label} </label>}
      <div>
        <input placeholder={label} {...input} />
        { error && touched && <span> {error} </span>}
      </div>
    </div>
  );
};

const renderSelect = props => {
  const { label, children, input } = props;

  // console.log("renderSelect", props.type);
  // console.log("field: ", field);
  // console.log("input: ", field.type);

  return (
    <div>
      <label> {label} </label>
      <div>
        <select {...input}>{children}</select>
      </div>
    </div>
  );
};

const submit = (e, values) => {
  e.preventDefault();
  alert(JSON.stringify(values));
};

//LIST OF LOCATIONS IN LAGOS
let homes = ["surulere", "VI", "Lekki", "Mile 2", "oshodi", "ikeja"];

//SORT LOCATIONS
homes = homes.sort();

const GetFreeRide = props => {
  console.log("props: ", props);
  const { handleSubmit, pristine, isSubmitting, handleReset, values, errors } = props;

  return (
    <form onSubmit={handleSubmit}>
      
    <Field
        component={renderInput}
        label="first Name"
        name="firstName"
        type="text"
      />
      <Field
        component={renderInput}
        label="last Name"
        name="lastName"
        type="text"
      />
      
      <Field component={renderSelect} name="home" label="Home">
        <option>Select your home location</option>
        {homes.map(home => (
          <option key={home}> {home} </option>
        ))}
      </Field>

      <Field component={renderSelect} name="work" label="Work">
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
        label="Enter Phone Number"
      />
      {/* <input type="tel" /> */}

      <button type="submit" disabled={pristine || isSubmitting}>
        get my free ride
      </button>
      <button onClick={handleReset} disabled={pristine || isSubmitting}>
        clear
      </button>
    </form>
  );
};

const validate = values => {
  let errors = {};
  //FIRST NAME VALIDATION
  if (!values.firstName) {
    errors.firstName = "required";
  } else if(/[0-9=+*&^]/gi.test(values.firstName)){
    errors.firstName = "letters only";
  } else if (values.firstName.length < 5) {
    errors.firstName = "min of 5 letters";
  } 

  //LASTNAME VALIDATION
  if(!values.lastName){
    errors.lastName = "required";
  } else if( /[0-9=+*&^]/gi.test(values.lastName) ) {
    errors.lastName = "letters only"
  }
  //PHONE NUMBER VALIDATION
  if(!values.phoneNumber){
    errors.phoneNumber = "required";
  } else if (isNaN(Number(values.phoneNumber))){
    errors.phoneNumber = "numbers only"
  }else if(values.phoneNumber.length < 10) {
    errors.phoneNumber = "incomplete phone number"
  } 
  return errors;
};

const schema = Yup.object().shape({
  firstName: Yup.string().min(5, "min of 5 letters").required(),
  lastName: Yup.string().min(5, "min of 5 letters").required()
});

export default reduxForm({
  form: "getFreeRide",
  // validate,
  asyncValidate: asyncValidate(schema),
  shouldAsyncValidate
})(GetFreeRide);

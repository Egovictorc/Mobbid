import React, { useState } from "react";
import { withFormik, Field } from "formik";
import firebase from "firebase/app";
import * as Yup from "yup";
import { moment } from 'moment';

let inputField = ({ type, field, label, form: { errors, touched } }) => {

  return (
    <div className="header__input--div">
      {/* hide labels */}
      <label style= { {display: "none"} }>{label}</label>
      <div>
        <input
          type={type}
          placeholder={label}
          {...field}
          className="header__input"
        />
        {touched[field.name] && errors[field.name] && <p  className="getRide__error header__input--error"> {errors[field.name]} </p>}
      </div>
    </div>
  );
};

const HomeForm = props => {
  const { resetForm, handleChange, dirty, isSubmitting, values, isValid } = props;
  // console.log("home props",  props)
const [count, setCount] = useState(1)

  const btnStyle = {
    cursor: (isSubmitting || !isValid ) ? "not-allowed": "pointer" ,
    title: !isValid ? ("Pls fill in your details correctly"): (null) 
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const db = firebase.firestore();
    //CALL SENDING SO AS TO RENDER SENDING REQUEST
    
    if (isValid) {
      props.sending(true);
      const userRef = db.collection("users").doc(values.phoneNumber).set({
      // firstName: values.firstName,
      ...values,
      //PREVENT IT FROM PUSHING PHONE NUMBER AS STRING
      phoneNumber: Number(values.phoneNumber),
      // Date: Date.now()
      Date: moment().format("dddd Do, MMMM YYYY"),
      Time: moment().format('h:mm:ss A')
    }, {merge: true})//MERGE IF THE DOC EXISTS
    .then( ()=> props.sending(false) ) //CALL TO STOP SHOWING SENDING REQUEST
    .then (()=> resetForm() )
    .then( ()=>document.getElementById("homeModal").style.width = "100vw")
    .catch( err => {
      // console.log(err)
    })
  }}

  return (
    <form onSubmit={handleSubmit} className="header__input-container">
      <Field
        name="firstName"
        type="text" value={props.values.name}
        label="First Name"
        component={inputField}
      />
      <Field
        name="phoneNumber"
        type="tel" value={props.values.name}
        label="Phone Number"
        component={inputField}
      />

      <button className="header__button" type="submit" style={ btnStyle }> schedule a ride</button>
    </form>
  );
};
//VALIDATION FOR PHONE NUMBER
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schema = Yup.object().shape({
  firstName: Yup.string()
    .required("* First name must not be empty")
    .min(3, "* Minimum of 3 letters"),
    // phoneNumber: Yup.number().required("* Phone number must not be empty").typeError("* That doesn't look like a phone number").positive("* A phone number can't start with a minus").integer("* A phone number can't include a decimal point")
    phoneNumber: Yup.string().matches(phoneRegExp, "* Invalid Phone number").required("* Phone number must not be empty")
});


// const mapDispatchToProps = (dispatch)=> {
//     return {
//         createUser: (user)=>dispatch({type: "CREATE__USER", payload: user })
//     }
// }
// connect(null, mapDispatchToProps)(HomeForm);
const initValues = {firstName: "", phoneNumber: ''}
export default withFormik({
    // enableReinitialize: true,
    initialValues: initValues,
    mapPropsToValues: ()=> ({firstName: "", phoneNumber: ''}),
    
  validationSchema: schema
})(HomeForm);

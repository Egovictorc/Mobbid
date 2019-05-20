import React from "react";
import { withFormik, Field } from "formik";
import firebase from "firebase/app";
import * as Yup from "yup";

let inputField = ({ type, field, label, form: { errors, touched } }) => {


  return (
    <div className="header__input--div">
      <label>{}</label>
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
  const { resetForm, handleChange, dirty, isSubmitting, values } = props;
  console.log(props)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const db = firebase.firestore();
    const userRef = db.collection("users").add({
      firstName: values.firstName,
      phoneNumber: Number(values.phoneNumber),
      time: Date.now()
    })
    .then (()=>{ resetForm() })
    .then( ()=>document.getElementById("homeModal").style.width = "100vw")
    .catch( err => {
      alert(err)
    })
  }

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

      <button className="header__button" type="submit" style={ { cursor: (isSubmitting || !values.firstName || !values.phoneNumber ) ? "not-allowed": "pointer" } }> schedule a ride</button>
    </form>
  );
};

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required("*First name must not be empty")
    .min(3, "*Minimum of 3 letters"),
    phoneNumber: Yup.number().required("* Phone number must not be empty").typeError("* That doesn't look like a phone number")
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

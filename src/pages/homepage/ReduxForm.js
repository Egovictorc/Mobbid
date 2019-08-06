import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import * as Yup from "yup";
import { asyncCreateUser, increment } from '../../actionCreators/ActionCreators';



let inputField = ({ type, input, label, meta: { errors, touched } }) => {


  return (
    <div className="header__input--div">
      <label>{}</label>
      <div>
        <input
          type={type}
          placeholder={label}
          {...input}
          className="header__input"
        />
        {touched[input.name] && errors[input.name] && <p  className="getRide__error header__input--error"> {errors[input.name]} </p>}
      </div>
    </div>
  );
};

const HomeForm = props => {
  const { handleSubmit, handleChange, dirty, isSubmitting, values } = props;
  // console.log("values", values)
//   console.log(props.increment)
//   console.log("firstName", values.firstName)
const submit = (values)=>{
    // e.preventDefault();
    // props.dispatch({type: 'INCREMENT'});
    asyncCreateUser(values);
    console.log("values: ", values);

}

  return (
    <form onSubmit={handleSubmit(submit)} className="header__input-container">
      <Field
        name="firstName"
        type="text" 
        label="First Name"
        component={inputField}
      />
      <Field
        name="phoneNumber"
        type="tel" 
        label="Phone Number"
        component={inputField}
      />

      <button className="header__button" type="submit"> schedule a ride</button>
    </form>
  );
};

// const schema = Yup.object().shape({
//   firstName: Yup.string()
//     .required("*First name must not be empty")
//     .min(3, "*Minimum of 3 letters"),
//     phoneNumber: Yup.number().required("* Phone number must not be empty").typeError("* That doesn't look like a phone number")
// });


// const mapDispatchToProps = (dispatch)=> {
//     return {
//         createUser: (user)=>dispatch({type: "CREATE__USER", payload: user })
//     }
// }
// connect(null, mapDispatchToProps)(HomeForm);
export default reduxForm({
    form: 'homeform',
   
})(HomeForm)
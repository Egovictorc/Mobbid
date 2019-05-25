import React, { Component } from "react";
import firebase from "firebase/app";

export default class OrdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      phoneNumber: "",
      error: "",
      isSubmitting: false,
      isValid: false,
      displayModal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    console.log(this.props)
  }
  componentDidUpdate(){
    console.log(this.props)
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if(this.state.firstName && this.state.phoneNumber) {
    this.setState((prevState)=> ({
        isValid: true, //!prevState.isValid,
        isSubmitting: false,
    }),
    )
  }};

  handleSubmit = e => {
    e.preventDefault();
    
    if(this.state.firstName && this.state.phoneNumber) {
    console.log(this.state.firstName)
    console.log(this.state.phoneNumber);    
    
    //PREVENT MULTIPE SUBMIT BY USER
    this.setState({
        firstName: "",
        phoneNumber: "",
        isSubmitting: true,
        displayModal: true,
    })
    const db = firebase.firestore();
    const userRef = db.collection("users").add({
      firstName: this.state.firstName,
      phoneNumber: Number(this.state.phoneNumber)
    }).then(()=> {
    this.setState({
        isSubmitting: false,        
        isValid: false,
    })})
    .catch( error=>{
        this.setState({
            error: error.type,
            firstName: "",
        phoneNumber: "",
        isSubmitting: false,        
        isValid: false,
        displayModal: false,
        })
    })
  }};

  render() {
    return (
      <form onSubmit={(e)=> {
        return (this.handleSubmit(e),
        this.props.modal)
        }} className="header__input-container">
        <div className="header__input--div">
          <label>{}</label>
          <div>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              className="header__input"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="header__input--div">
          <label>{}</label>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              className="header__input"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <button type="submit" className="header__button" style={ {cursor: (this.state.isSubmitting === false) && this.state.isValid ? "pointer":  "not-allowed" } } >submit</button>
      </form>
    );
  }
}

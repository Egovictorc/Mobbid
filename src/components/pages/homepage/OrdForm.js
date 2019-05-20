import React, { Component } from "react";
import firebase from "firebase/app";

export default class OrdForm extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      phoneNumber: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.firstName)
    console.log(this.state.phoneNumber);
    
    const db = firebase.firestore();
    const userRef = db.collection("users").add({
      firstName: this.state.firstName,
      phoneNumber: Number(this.state.phoneNumber)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="header__input-container">
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
        <button type="submit" className="header__button">submit</button>
      </form>
    );
  }
}

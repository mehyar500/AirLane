import React, { Component } from "react";
import "./Appbody.css";
import API from "../Utils/API";


class NewPlane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      type: "",
      capacity: ""
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open = () => {
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  // Handles updating component state when the user types into the input field
  handleChange = event => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //when the form is submitted, use the API to save a new plane
  handleSubmit = event => {
    event.preventDefault();
    const { name, type, capacity } = this.state;
    API.savePlane(name, type, capacity);
  };

  render() {
    return (
      <div className="container one">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <h1>Create New Plane Information</h1>
            <div className="account">Account info here</div>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default NewPlane;
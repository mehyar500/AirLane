import React, { Component } from "react";
<<<<<<< HEAD
import { Grid, Row, Col } from "react-bootstrap";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";
import API from "../Utils/API";
import "./Appbody.css";
=======
import "./Appbody.css";
import API from "../Utils/API";
// import {
//   Button,
//   FormGroup,
//   FormControl,
//   ControlLabel,
//   Modal
// } from "react-bootstrap";
>>>>>>> master

class NewResevation extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, date: "", howMany: "", location: "", destination: "", price: "" };
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
    const { date, howMany, location, destination, price } = this.state;
    API.savePlane(date, howMany, location, destination, price);
  };

  render() {
    return (
<<<<<<< HEAD
      <Grid className="one">
        <Row>
          <Col md={6} mdOffset={3}>
            <h1>Create New Reservation Information</h1>
=======
      <div className="container one">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <h1>Create New Resevation Information</h1>
>>>>>>> master
            <div className="account">Account info here</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NewResevation;

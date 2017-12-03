import React, { Component } from "react";
import { Button, 
  Form, 
  FormGroup,
  FormControl, 
  InputGroup, 
  ControlLabel, 
  Glyphicon, 
  DropdownButton, 
  MenuItem,
  Col,
  Row
} from "react-bootstrap";
import API from "../Utils/API";


  
  class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showModal: false, firstName: "", lastName: "", email: "", password: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles updating component state when the user types into the input field
    handleChange = event => {
      // console.log(event.target.value);
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

    handleSubmit(event) {
      const { name, value } = event.target;
      alert("A " + [name] + " was submitted: " + value);
      event.preventDefault();
      
    }

    render() {
      return <div className="container one">
          <div className="row">
            <div className="col-md-12">
              <h1>Your Profile</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col componentClass={ControlLabel} md={2}>
                First Name
              </Col>
              <Col md={8}>
                <FormControl name="firstName" type="text" placeholder="ex: Tom" value={this.state.value} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} md={2}>
                Last Name
              </Col>
              <Col md={8}>
                <FormControl name="lastName" type="text" placeholder="ex: Smith" value={this.state.value} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} md={2}>
                Email Address
              </Col>
              <Col md={8}>
                <FormControl name="emailAddress" type="email" placeholder="ex: TSmith@xxx.com" value={this.state.value} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} md={2}>
                Jet Model
              </Col>
              <Col md={8}>
                <FormControl name="jetModel" type="text" placeholder="ex: Boeing Business" value={this.state.value} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} md={2}>
                Jet Identification
              </Col>
              <Col md={8}>
                <FormControl name="jstId" type="text" placeholder="ex: B234H569F33" value={this.state.value} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} md={2}>
                Jet Location
              </Col>
              <Col md={8}>
                <FormControl name="jstLocation" type="text" placeholder="ex: San Jose, CA" value={this.state.value} onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <input type="submit" value="Submit" />
          </Form>
        </div>;
    }
  }

export default Profile;
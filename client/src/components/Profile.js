import React, { Component } from "react";
import { Button, Form, FormGroup,FormControl, InputGroup } from "react-bootstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      return <div className="container">
          <Form>
            <FormGroup row>
              <p>Profile</p>
              <InputGroup type="text" name="firstName" id="firstName" placeholder="First Name">
                <InputGroup.Addon>First Name</InputGroup.Addon>
                <FormControl type="text" placeholder="First Name" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup type="text" name="lastName" id="lastName" placeholder="Last Name">
                <InputGroup.Addon>Last Name</InputGroup.Addon>
                <FormControl type="text" placeholder="Last Name" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup type="email" name="email" id="email" placeholder="Email">
                <InputGroup.Addon>Email</InputGroup.Addon>
                <FormControl type="email" placeholder="Email" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup type="number" name="phone" id="phone" placeholder="Phone Number">
                <InputGroup.Addon>Phone Number</InputGroup.Addon>
                <FormControl type="number" placeholder="Phone Number" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup type="address" name="address" id="address" placeholder="Address">
                <InputGroup.Addon>Address</InputGroup.Addon>
                <FormControl type="address" placeholder="Address" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup type="text" name="owner" id="owner" placeholder="Own an Aircraft?">
                <InputGroup.Addon>Own an Aircraft?</InputGroup.Addon>
                <FormControl type="boolean" placeholder="Own an Aircraft?" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Button>Save</Button>
            </FormGroup>
          </Form>
        </div>;
  }

}

export default Profile;

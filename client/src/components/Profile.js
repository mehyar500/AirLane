import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      return <div className="container">
          <Form>
            <FormGroup row>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="First Name"/>
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
            </FormGroup>
            <FormGroup>
              <Label>Own an Aircraft ?</Label>
            </FormGroup>
          </Form>
        </div>;
  }

}

export default Profile;
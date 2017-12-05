import React, { Component } from "react";
import API from "../Utils/API";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstName: "",
      lastName: "",
      emailAddress: "",
      jetModel: "",
      jstId: "",
      jstLocation: "",
      maxocc: "",
      phone: "",
      wifi: "",
      entertainment: "",
      bedroom: ""
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

  //when the form is submitted, use the API to save a user
  handleSubmit = event => {
    event.preventDefault();
   const {firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom} = this.state;
   API.saveUser(firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom).then(console.log(firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom)).catch(err => console.log("Signup.js API call " + err))
  };

  render() {
    return <div>
        <div onClick={this.open}>Profile</div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Your Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form action="/profile">
                <FormGroup>
                  <ControlLabel htmlFor="firstName">
                    First Name
                  </ControlLabel>
                  <FormControl name="firstName" type="text" placeholder="ex: Tom" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="lastName">Last Name</ControlLabel>
                  <FormControl name="lastName" type="text" placeholder="ex: Smith" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="emailAddress">Eamil</ControlLabel>
                  <FormControl name="emailAddress" type="email" placeholder="ex: tomSmith@email.com" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="jetModel">Jet's Model</ControlLabel>
                  <FormControl name="jetModel" type="text" placeholder="Jet Model" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="jstId">
                    Jet's Identification
                  </ControlLabel>
                  <FormControl name="jstId" type="text" placeholder="Jet's Identification" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="jstLocation">
                    Jet's Identification
                  </ControlLabel>
                  <FormControl name="jstLocation" type="text" placeholder="Jet's Location" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup controlId="maxocc">
                  <ControlLabel>Max Occupancy</ControlLabel>
                    <FormControl name="maxocc" componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">6</option>
                      <option value="other">8</option>
                      <option value="other">10</option>
                      <option value="other">12</option>
                      <option value="other">14</option>
                      <option value="other">16</option>
                      <option value="other">18</option>
                      <option value="other">20</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="phone">
                  <ControlLabel>Satcom Phone</ControlLabel>
                    <FormControl name="phone" componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">Yes</option>
                      <option value="other">No</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="wifi">
                  <ControlLabel>Wi-Fi</ControlLabel>
                    <FormControl name="wifi" componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">Yes</option>
                      <option value="other">No</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="entertainment">
                  <ControlLabel>Entertainment Center</ControlLabel>
                    <FormControl name="entertainment" componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">Yes</option>
                      <option value="other">No</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="bedroom">
                  <ControlLabel>Den, Master Bedroom</ControlLabel>
                    <FormControl name="bedroom" componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">Yes</option>
                      <option value="other">No</option>
                  </FormControl>
                </FormGroup>

                
                <Button bsStyle="primary" type="submit" value="submit" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

export default Profile;
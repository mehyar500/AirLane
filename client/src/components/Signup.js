import React, { Component } from "react";
import API from "../Utils/API";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '30px auto 10px' };

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: ""
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
   const {firstName, lastName, password} = this.state;
   API.saveUser(firstName, lastName, password).then(console.log(firstName, lastName, password)).catch(err => console.log("Signup.js API call " + err))
  };

  render() {
    return <div>
        <div onClick={this.open}>Sign Up</div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Registeration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form action="/signup">
                <FormGroup>
                  <ControlLabel htmlFor="firstName">
                    First Name
                  </ControlLabel>
                  <FormControl name="firstName" type="text" placeholder="ex: Michael" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="lastName">Last Name</ControlLabel>
                  <FormControl name="lastName" type="text" placeholder="ex: Smith" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="email">Eamil</ControlLabel>
                  <FormControl name="email" type="email" placeholder="ex: johnSmith@email.com" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="password">Password</ControlLabel>
                  <FormControl name="password" type="password" placeholder="New Password!" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>

                  <ControlLabel htmlFor="passwordconf">
                    Confrim Password
                  </ControlLabel>
                  <FormControl name="passwordConf" type="password" placeholder="confirm new password" onChange={this.handleChange} />
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

export default Signup;

function newFunction() {
  const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
  return wellStyles;
}

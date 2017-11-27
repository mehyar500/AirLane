import React, { Component } from "react";

import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";
import Routes from "../Utils/Routes";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: "",
      userCreated: Date
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
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //when the form is submitted, use the API to save a user
  handleSubmit = event => {
    event.preventDefault();
    Routes.signUp({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConf: this.state.passwordConf,
      userCreated: Date.now
    })
      .then(console.log(this.state))
      .catch(err => console.log(err));
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
                <Button type="submit" value="submit" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </form>
              <div> OR </div>
              <div> <h3> Sign in with </h3></div>
              <div inline>
                <Button bsStyle="primary">Facebook</Button>
                <Button bsStyle="danger">Google</Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button>Facebook</Button>
              <Button>Google</Button>
            </div>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

export default Signup;
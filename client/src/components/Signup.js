import React, { Component } from "react";
import API from "../Utils/API";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

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
    const {firstName, lastName,email, password} = this.state;
    return API.saveUser({ firstName, lastName, email, password })
      .then(res => {
        console.log(res);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
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
              <div className="well" style={wellStyles}>
              <h5>OR</h5>
              </div>
              <div> <h3> Sign in with </h3></div>
              <div className="well" style={wellStyles}>
               <Button bsStyle="primary" bsSize="large" block>Facebook</Button>
               <Button bsStyle="danger" bsSize="large" block>Google</Button>
              </div>
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
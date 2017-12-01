import React, { Component } from "react";
import API from "../Utils/API"
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";

const wellStyles = { maxWidth: 400, margin: '30px auto 10px' };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: "",
      password: ""
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
    const {email, password} = this.state;
    API.login(email, password);
  };

  render() {
    return <div>
        <div onClick={this.open}>Log In</div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <div>
              <form action="/login">
                <FormGroup>
                  <ControlLabel htmlFor="email">Email</ControlLabel>
                  <FormControl name="email" type="email" placeholder="ex: johnSmith@email.com" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="password">Password</ControlLabel>
                  <FormControl name="password" type="password" placeholder="New Password!" onChange={this.handleChange} />
                </FormGroup>                
                <Button className="btn-primary" type="submit" value="submit" onClick={this.handleSubmit}>
                  Log In
                </Button>
              </form>
              <div className="row">
                <div className="col-md-12">
                  <hr></hr>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="text-center"> Sign in with </h3>
                </div>
              </div>
              <div className="row"></div>                                         
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

export default Login;
import React, { Component } from "react";

import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";



class Login extends Component {
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
                  <ControlLabel htmlFor="email">Eamil</ControlLabel>
                  <FormControl name="email" type="email" placeholder="ex: johnSmith@email.com" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="password">Password</ControlLabel>
                  <FormControl name="password" type="password" placeholder="New Password!" onChange={this.handleChange} />
                </FormGroup>                
                <Button type="submit" value="submit" onClick={this.handleSubmit}>
                  Log In
                </Button>
              </form>
              <div> OR </div>
              <div> <h3> Sign in with </h3></div>
              <div className="row mg-btm">
              <div class="col-md-12">
                 <a href="#" class="btn btn-primary btn-block">
                   <i className="icon-facebook"></i>    Login with Facebook
                 </a>
             </div>
             </div>
             <div className="row">
			<div class="col-md-12">
                <a href="#" class="btn btn-danger btn-block" >
                  <i className="icon-google"></i>    Login with google
                </a>
            </div>
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
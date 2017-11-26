import React, { Component } from "react";
import { bsStyle, Button, FormGroup,FormControl, InputGroup, Modal } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
       showModal: false
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

  render() {
    return <div>
        <div onClick={this.open}>Sign Up</div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Registeration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form action="">
                <FormGroup>
                  <FormControl Name="firstName" type="text" placeholder="First Name! ex: Michael" />
                </FormGroup>
                <FormGroup>
                  <FormControl Name="lastName" type="text" placeholder="Last Name! ex: Smith" />
                </FormGroup>
                <FormGroup>
                  <FormControl Name="email" type="email" placeholder="Email! ex: johnSmith@email.com" />
                </FormGroup>
                <FormGroup>
                  <FormControl Name="password" type="password" placeholder="New Password!" />
                </FormGroup>
                <FormGroup>
                  <FormControl Name="passwordconf" type="password" placeholder="confirm new password" />
                </FormGroup>
                <FormGroup>
                  <Button bsStyle="primary">Submit</Button>
                </FormGroup>
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
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

export default Signup;
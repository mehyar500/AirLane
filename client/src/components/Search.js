import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  Modal
} from "react-bootstrap";

class Search extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
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
    // const { firstName, lastName, password } = this.state;
    // API.saveUser(firstName, lastName, password)
    //   .then(console.log(firstName, lastName, password))
    //   .catch(err => console.log("Signup.js API call " + err));
  };

  render() {
    return <div className="container" onClick={this.open}>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Registeration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <Form>
                  <FormGroup row>
                    <InputGroup type="text" name="firstName" id="firstName" placeholder="First Name">
                      <InputGroup.Addon>Location</InputGroup.Addon>
                      <FormControl type="text" placeholder="First Name" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup type="text" name="NumPass" id="NumPass">
                      <InputGroup.Addon>
                        Number of Passengers
                      </InputGroup.Addon>
                      <FormControl type="text" placeholder="Number of Passengers" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup type="text" name="AirType" id="AirType">
                      <InputGroup.Addon>Type of Airplane</InputGroup.Addon>
                      <FormControl type="boolean" placeholder="Type of Airplane" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Button>Save</Button>
                  </FormGroup>
                </Form>
              </div>
              <div className="col-md-3" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>;
  }
}

export default Search;


import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  Button,
  ControlLabel
} from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import "./Appbody.css";
import API from "../Utils/API";


class NewPlane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      type: "",
      capacity: ""
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

  //when the form is submitted, use the API to save a new plane
  handleSubmit = event => {
    event.preventDefault();
    const { name, type, capacity } = this.state;
    API.savePlane(name, type, capacity);
  };

  render() {
    return (
      <Grid className="one">
        <Row>
          <h1>Create New Plane Information</h1>
          <Col md={4} mdOffset={4}>
            <Form horizontal>
              <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} md={3}>
                  Name:
                </Col>
                <Col md={12}>
                <FormControl type="text" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalType">
                <Col componentClass={ControlLabel} md={3}>
                  Aircraft:
                </Col>
                <Col md={12}>
                <FormControl type="text" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalCapacity">
                <Col componentClass={ControlLabel} md={5}>
                  Seat Capacity:
                </Col>
                <Col md={12}>
                <FormControl type="text" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup>
                <Button className="btn-primary" type="submit" onClick={this.handleSubmit}>
                  Create
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NewPlane;



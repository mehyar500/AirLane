import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";
import API from "../Utils/API";
import "./Appbody.css";

class NewLane extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, departure: "", arrival: "", flight_date: "", flight_type: "", price_range: "" };
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
    const { departure, arrival, flight_date, flight_type, price_range } = this.state;
    API.saveLane(departure, arrival, flight_date, flight_type, price_range);
    
  };

  render() {
    return (
      <Grid className="one">
        <Row>
          <Col md={6} mdOffset={3}>
            <h1>Create New Reservation Information</h1>
            <div className="account">Account info here</div>
          </Col>
        </Row>
        <form>
                <FormGroup>
                  <ControlLabel htmlFor="departure">Start (City)</ControlLabel>
                  <FormControl name="departure" type="text" placeholder="Enter City or Airport name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="arrival">Destination (City)</ControlLabel>
                  <FormControl name="arrival" type="text" placeholder="Enter City or Airport name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="flight_date">Flight Date</ControlLabel>
                  <FormControl name="flight_date" type="text" placeholder="ex: 01/12/2019" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="flight_type">Flight Type</ControlLabel>
                  <FormControl name="flight_type" componentClass="select" placeholder="select" onChange={this.handleChange}>
                    <option value="all">All Flights</option>
                    <option value="0">Only One-Way (A to B)</option>
                    <option value="1">Only Sightseeing Flights</option>
                    <option value="2">Only Excursions (A to B to A)</option>
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel htmlFor="price_range">Price per Seat</ControlLabel>
                  <FormControl name="price_range" componentClass="select" placeholder="Select" onChange={this.handleChange}>
                    <option value="">Please select ...</option>
                    <option value="90">up to $90</option>
                    <option value="150">up to $150</option>
                    <option value="225">up to $225</option>
                    <option value="350">up to $350</option>
                    <option value="450">up to $450</option>
                  </FormControl>
                </FormGroup>
                <Button bsStyle="primary" type="submit" value="submit" onClick={this.handleSubmit}>
                  Apply
                </Button>
        </form>
      </Grid>
    );
  }
}

export default NewLane;
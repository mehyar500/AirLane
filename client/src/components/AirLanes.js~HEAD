import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal,
  Table
} from "react-bootstrap";
import API from "../Utils/API";
import "./Appbody.css";

class AirLanes extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, date: "", howMany: "", location: "", destination: "", price: "" };
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
    const { date, howMany, location, destination, price } = this.state;
  };


  render() {
    return (
      <Grid className="one">
        <Row>
          <Col md={6} mdOffset={3}>
            <h1>Create New Reservation Information</h1>
            <Table responsive>
              <thead>
                <tr>
                  <th>Flight Date</th>
                  <th>Arrival</th>
                  <th>Departure</th>
                  <th>Flight Type</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><div className="flight_date"></div></td>
                  <td><div className="arrival"></div></td>
                  <td><div className="departure"></div></td>
                  <td><div className="flight_type"></div></td>
                  <td><div className="price"></div></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AirLanes;

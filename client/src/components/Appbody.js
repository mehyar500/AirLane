import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Button
} from "react-bootstrap";
import { Grid, Row, Col} from "react-bootstrap";
import Results from "./Results";
import "./Appbody.css";


class Appbody extends Component {
  
  render () {
    return (
      <div>
      <Grid className="one">
        <Row>
          <Col md={12}>
            <h1>Rent a plane for any lane</h1>
            <h4>Save money, meet awesome people, and worry less</h4>
          </Col>
        </Row>
        
        <Row>
          <Col md={12}>
            <Form inline>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" placeholder="Location" name="location" />
                </InputGroup>
                <InputGroup>
                  <FormControl type="text" placeholder="Destination" name="destination" />
                </InputGroup>
                <InputGroup>
                  <FormControl placeholder="How Many" name="howMany" />
                </InputGroup>
                <InputGroup>
                  <FormControl placeholder="Trip Date" name="date" />
                </InputGroup>
                <Button className="btn-primary" type="submit">
                  Search
                </Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Results />
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Appbody;
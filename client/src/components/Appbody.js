import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Button
} from "react-bootstrap";
import Results from "./Results";
import "./Appbody.css";


class Appbody extends Component {
  
  render () {
    return (
      <div>
      <div className="container one">
        <div className="row">
          <div>
            <h1>Rent a plane anywhere in the world</h1>
            <h4>Save money, meet awesome people, and worry less</h4>
          </div>
        </div>
        
        <div className="row">
            <Form inline>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" placeholder="Location" name="location" />
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
        </div>
      </div>
      <div className="container">
        <Results />
      </div>
    </div>
    );
  }
}

export default Appbody;
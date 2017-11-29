import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Button
} from "react-bootstrap";
import "./Appbody.css";


class Appbody extends Component {

    render () {
        return (
          <div className="container one">
            <div className="row">
              <div>
                <h1>Rent a plane anywhere in the world</h1>
                <h4>Save money, meet awesome people, and consume less</h4>
              </div>
            </div>
            <div className="row">
              <Form inline>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>Location</InputGroup.Addon>
                    <FormControl type="text" placeholder="Fort Lauderdale, FL" />
                  </InputGroup>
                  <InputGroup>
                    <FormControl placeholder="Pilot?" name="pilot" />
                  </InputGroup>
                  <InputGroup>
                    <FormControl placeholder="How Many" name="howMany" />
                  </InputGroup>
                  <InputGroup>
                    <FormControl placeholder="Trip Date" name="date" />
                  </InputGroup>
                  <Button type="submit">
                    Search
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        );
    }
}

export default Appbody;
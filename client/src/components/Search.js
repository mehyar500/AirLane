import React, { Component } from "react";
import { Button, Form, FormGroup,FormControl, InputGroup } from "react-bootstrap";

class Search extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
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
                    <InputGroup.Addon>Number of Passengers</InputGroup.Addon>
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
            <div className="col-md-3"></div>
          </div>
        </div>
      );
    }
}

export default Search;

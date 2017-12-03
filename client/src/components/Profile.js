import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      return (
        <Grid className="one">
          <Row>
            <Col md={6} mdOffset={3}>
              <h1>Your Name Here</h1>
              <div className="account">Account info here</div>
            </Col>
          </Row>
        </Grid>
      );
  }

}

export default Profile;

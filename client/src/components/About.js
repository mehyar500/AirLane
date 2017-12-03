import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Appbody.css";


class About extends Component {

  render () {
    return (
		<div>
			<Grid>
				<h1 className="one">About Us</h1>
				<Row>
					<Col md={6} className="one">
						<p> We are making a peer to peer aircraft network to make traveling easier</p>
						<p> With this network, consumers will be able to connect with nearby aircraft to make traveling more convenient than through the commerical airlines.</p>
					</Col>
					<Col md={5} mdOffset={1} className="one">
						<p>picture of the group</p>
					</Col>
				</Row>
			</Grid>
		</div>
    );			
  }
}

export default About;
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Appbody.css";


class Partner extends Component {

  render () {
    return (
		<div>
			<Grid className="one">
				<Row>
					<Col md={12}>
						<h1>Become A Partner</h1>
						<h4>Information about being a partner to the network!</h4>
					</Col>
				</Row>
			</Grid>
		</div>
    );			
  }
}

export default Partner;
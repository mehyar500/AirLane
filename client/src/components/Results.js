import React, { Component } from "react";
import { Grid, Row, Col, Media, Button } from "react-bootstrap";
import MapContainer from "./MapContainer";
import "./Appbody.css";

class Results extends Component {
  constructor(props) {
    super(props);
    //set the map state
    this.state = {
      center: { lat: null, lng: null },
      zoom: null
    };
  } 
	render() {
		return (
			<Grid>
				<Row>
					<Col md={6} className="one">
						<h3>Results</h3>
						<div className="three">
							<Media>
								<Media.Left align="middle">
									<img width={64} height={64} src="https://www.applecreekranch.com/assets/img/image-placeholder.png" alt="Image" />
								</Media.Left>
								<Media.Body>
									<h5>Plane #1</h5>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </p>
									<Button bsSize="xsmall" bsStyle="primary right">Details</Button>
								</Media.Body>
							</Media>
							<Media>
								<Media.Left align="middle">
									<img width={64} height={64} src="https://www.applecreekranch.com/assets/img/image-placeholder.png" alt="Image" />
								</Media.Left>
								<Media.Body>
									<h5>Plane #2</h5>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </p>
									<Button bsSize="xsmall" bsStyle="primary right">Details</Button>
								</Media.Body>
							</Media>
							<Media>
								<Media.Left align="middle">
									<img width={64} height={64} src="https://www.applecreekranch.com/assets/img/image-placeholder.png" alt="Image" />
								</Media.Left>
								<Media.Body>
									<h5>Plane #3</h5>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </p>
									<Button bsSize="xsmall" bsStyle="primary right">Details</Button>
								</Media.Body>
							</Media>
							<Media>
								<Media.Left align="middle">
									<img width={64} height={64} src="https://www.applecreekranch.com/assets/img/image-placeholder.png" alt="Image" />
								</Media.Left>
								<Media.Body>
									<h5>Plane #4</h5>
									<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </p>
									<Button bsSize="xsmall" bsStyle="primary right">Details</Button>
								</Media.Body>
							</Media>
						</div>
						<div className="results" />
					</Col>

					<Col md={5} mdOffset={1} className="one">
						{/* <h3> Google Maps here </h3>
						<img width={370} height={370} src="https://www.applecreekranch.com/assets/img/image-placeholder.png" alt="Image" />
						<div className="google"></div> */}
						<MapContainer />
					</Col>
				</Row>
			</Grid>
		);
	}

}

export default Results;

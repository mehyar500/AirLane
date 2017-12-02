import React, { Component } from "react";
import MapContainer from "./MapContainer";
import "./Appbody.css";

class Results extends Component {
  //set the map state
  state = {
    center: { lat: null, lng: null },
    zoom: null
  };

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5 one">
						<h3>Results</h3>
						<p> reults here </p>
						<div className="results"></div>
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-6 one">
						<h3> Google Maps here </h3>
						<div className="google"></div>
					</div>
				</div>
			</div>
		);
	}

}

export default Results;

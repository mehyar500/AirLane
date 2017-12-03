import React, { Component } from "react";
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
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h3>Results</h3>
						<p> reults here </p>
						<div className="results"></div>
					</div>
					<div className="col-md-6" style={{position: "relative",  display: "block"}}>
            <MapContainer />
					</div>
				</div>
			</div>
		);
	}

}

export default Results;

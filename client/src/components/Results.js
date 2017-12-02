import React, { Component } from "react";
<<<<<<< HEAD
import MapContainer from "./MapContainer";
=======
import "./Appbody.css";

>>>>>>> 0ccb768b4dd8efa8ad17de29a94a8a73493fbe83

class Results extends Component {
  //set the map state
  state = {
    center: { lat: null, lng: null },
    zoom: null
  };

<<<<<<< HEAD
  render() {
    return <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Results</h3>
            <p> reults here </p>
            <div className="results" />
          </div>
          <div className="col-md-6" style={{ width: "50%", height: "400px", position: "relative"  }}>
            <MapContainer/>
          </div>
        </div>
      </div>;
  }
=======
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
>>>>>>> 0ccb768b4dd8efa8ad17de29a94a8a73493fbe83
}

export default Results;

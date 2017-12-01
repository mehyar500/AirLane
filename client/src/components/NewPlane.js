import React, { Component } from "react";
import "./Appbody.css";


class NewPlane extends Component {

	render() {
		return(
			<div className="container one">
          		<div className="row">
            		<div className="col-md-3"></div>
        			<div className="col-md-6">
          				<h1>Create New Plane Information</h1>
          				<div className="account">Account info here</div>
					</div>
        			<div className="col-md-3"></div>
          		</div>
        	</div>
		);
	}
}

export default NewPlane;
import React, { Component } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Button
} from "react-bootstrap";
import Results from "./Results";
import "./Appbody.css";


class About extends Component {

  render () {
    return (
		<div>
			<div className="container one">
				<div className="row">
					<div>
						<h1>About Us</h1>
						<h4>We'll Explain somethings here</h4>
					</div>
				</div>
			</div>
		</div>
    );			
  }
}

export default About;
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import About from "./About";
import './Appbody.css';



class Appfooter extends Component {
	render() {
		return (
			<Grid className="footer">
				<Row>
					<Col>
						<p>
							Create by <a href="https://github.com/mehyar500">Mehyar Swelim</a>  
							, <a href="https://github.com/Sambo68">Isam Amireh</a>  
							, <a href="">Stephane Avezado</a> 
							, <a href="https://github.com/cmoxey8719">Christopher Moxey</a> 2017
						</p>
						{/* <About /> */}
					</Col>
				</Row>
			</Grid>
    	);
  	}
}

export default Appfooter;

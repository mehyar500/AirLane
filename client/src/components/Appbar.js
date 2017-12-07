import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import API from "../Utils/API";
import NewLane from "./NewLane";

class Appbar extends Component {


 constructor(props) {
    super(props);
    this.state = { showModal: false, disabled: false, date: "", howMany: "", location: "", destination: "", price: "" };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open = () => {
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  // Handles updating component state when the user types into the input field
  handleChange = event => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //when the form is submitted, use the API to save a new plane
  handleSubmit = event => {
    event.preventDefault();
    const { date, howMany, location, destination, price } = this.state;
    API.savePlane(date, howMany, location, destination, price);
  };

  componentDidMount() {
    API.userAuth();
    API.userAuth() ? this.setState({ disabled : false}) : this.setState({ disabled : true});
  }

  render() {
    return <Navbar fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">airLane</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              {/* <NavLink to="/about">
              About Us
              </NavLink> */}
            </NavItem>
            <NavItem>
              {/* <NavLink to="/partner">
              Become a Partner
            </NavLink> */}
            </NavItem>
          </Nav>
          <Nav pullRight>
            {this.state.disabled ? <NavDropdown disabled={this.state.disabled} title="Menu" id="navdropdown">
                <MenuItem href="/profile">Profile</MenuItem>
                <MenuItem href="/newplane">
                  List You're Airplane Now
                </MenuItem>
                <MenuItem>Log Out</MenuItem>
              </NavDropdown> : <Nav>
                <NavItem>
                  <Login />
                </NavItem>
                <NavItem>
                  <Signup />
                </NavItem>
              </Nav>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
  }
}

export default Appbar;

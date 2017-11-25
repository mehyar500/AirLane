import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
  Modal
} from "react-bootstrap";
import Signup from "./Signup";

class Appbar extends Component {

  constructor() {
    super();
    this.state = { showModal: false, firstName: "", lastName: "", email: "", password: "", passwordConf: "", userCreated: Date };

  }
  

  render() {
    return <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">airLane</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Signup>Sign Up/Log In</Signup>
          </NavItem>
          <NavDropdown>
            <MenuItem href="/profile">Profile</MenuItem>
            <MenuItem>Prefrences</MenuItem>
            <MenuItem>List You're Airplane Now</MenuItem>
            <MenuItem divider />
            <MenuItem>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>;
  }
}

export default Appbar;

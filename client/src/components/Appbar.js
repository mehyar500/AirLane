import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import Signup from "./Signup";
import Login from "./Login";


class Appbar extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false};

  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">airLane</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            About Us
          </NavItem>
          <NavItem>
            Become a Partner
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            <Signup/>
          </NavItem>
          <NavItem>
            <Login/>
          </NavItem>
          <NavDropdown title="Menu" id="navdropdown">
            <MenuItem href="/profile">Profile</MenuItem>
            <MenuItem href="/newplane">List You're Airplane Now</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Appbar;

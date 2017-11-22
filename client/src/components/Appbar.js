import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Appbar extends Component {
  render() {
    return <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">airLane</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Sign Up
          </NavItem>
          <NavItem eventKey={2} href="#">
            Log In
          </NavItem>
          <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Profile</MenuItem>
            <MenuItem eventKey={3.2}>Prefrences</MenuItem>
            <MenuItem eventKey={3.3}>List You're Airplane Now</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>;
  }
}

export default Appbar;



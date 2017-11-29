import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import Signup from "./Signup";
import Login from "./Login";

class Appbar extends Component {

  constructor(props) {
    super(props);
    this.state = { showModal: false};

  }

  render() {
    return <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Airlane</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <NavLink to="/search">
              Search
            </NavLink>
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
            <MenuItem>Prefrences</MenuItem>
            <MenuItem>List You're Airplane Now</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>;
  }
}

export default Appbar;

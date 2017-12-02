import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import API from "../Utils/API";

class Appbar extends Component {

  state = { showModal: false, showMenu: false};

  handleOpenMenu = () => {
    this.state.showMenu = true;
  }
  handleCloseMenu = () => {
    this.state.showMenu = false;
  }

  componentDidMount() {
    if (API.userAuth) {
      this.handleOpenMenu
    } else {
      this.handleCloseMenu
    }
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
            <NavLink to="/about">
              About Us
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/partner">
              Become a Partner
            </NavLink>
          </NavItem>
        </Nav>
        <Nav pullRight>
          
          {this.state.showMenu ? (<NavDropdown showmenu={this.state.showMenu} title="Menu" id="navdropdown">
            <MenuItem href="/profile">Profile</MenuItem>
            <MenuItem href="/newplane">List You're Airplane Now</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </NavDropdown>) : (
            <Nav>
              <NavItem>
                <Login/>
              </NavItem>
              <NavItem>
            <Signup/>
          </NavItem>
            </Nav>
          )}
        </Nav>
      </Navbar>
    );
  }
}

export default Appbar;

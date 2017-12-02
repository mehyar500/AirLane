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
import API from "../Utils/API";

class Appbar extends Component {

  state = { showModal: false, showMenu: false};

  handleOpenMenu = () => {
    this.setState({showMenu : true});
  }
  handleCloseMenu = () => {
    this.setState({showMenu : false});
  }

  componentDidMount() {
    if (API.userAuth) {
      return this.handleOpenMenu;
    } else {
      return this.handleCloseMenu;
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
            About Us
          </NavItem>
          <NavItem>
            Become a Partner
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

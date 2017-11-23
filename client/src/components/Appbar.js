import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import ReactModal from "react-modal";
import Signup from "./Signup";

class Appbar extends Component {

  constructor() {
    super();
    this.state = { showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  

  render() {
    return <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">airLane</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav bsStyle="pills">
            <NavItem onClick={this.handleOpenModal}> Sign Up/Log In</NavItem>
            <ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
              <NavItem onClick={this.handleCloseModal}>Close
                <Signup />
              </NavItem>
            </ReactModal>
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

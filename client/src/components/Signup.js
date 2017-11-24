import React, { Component } from "react";
import { Button, Form, FormGroup,FormControl, InputGroup, Modal } from "react-bootstrap";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open = () => {
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <div onClick={this.open}>Sign Up</div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>

            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );

    // <div>
    //     <label>Name</label>
    //     <input type="text" ref="name" defaultValue="{this.props.fieldValues.name}" />

    //     <label>Password</label>
    //     <input type="password" ref="password" defaultValue="{this.props.fieldValues.password}" />

    //     <label>Email</label>
    //     <input type="email" ref="email" defaultValue="{this.props.fieldValues.email}" />

    //     <button onClick="">Join Now</button>
    //   </div>;
  }
}

export default Signup;
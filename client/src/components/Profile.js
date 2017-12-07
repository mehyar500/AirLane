import React, { Component } from "react";
import API from "../Utils/API";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Modal
} from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      firstName: "",
      lastName: "",
      emailAddress: "",
      jetModel: "",
      jstId: "",
      jstLocation: "",
      maxocc: "",
      phone: "",
      wifi: "",
      entertainment: "",
      bedroom: ""
    };
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

  //when the form is submitted, use the API to save a user
  handleSubmit = event => {
    event.preventDefault();
   const {firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom} = this.state;
   API.saveUser(firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom).then(console.log(firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom)).catch(err => console.log("Signup.js API call " + err))
  };

  render() {
    return <div class="container">
    <div class="row">
      <div class="offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center">
          <div class="row">
              <div class="col-lg-12 col-sm-12 col-12 profile-header"></div>
          </div>
          <div class="row user-detail">
              <div class="col-lg-12 col-sm-12 col-12">
                  <img src="image/man.png" class="rounded-circle img-thumbnail" />
                  <h5>John Addison</h5>
                  <p><i class="fa fa-map-marker" aria-hidden="true"></i> New Jersey, USA.</p>

                  <hr/>
                  <a href="#" class="btn btn-success btn-sm">Follow</a>
                  <a href="#" class="btn btn-info btn-sm">Send Messege</a>

                  <hr/>
                  <span>Lorem ips consectetur adipisium ,eiusmod tempor incididuin reprehendeanim.</span>
              </div>
          </div>
          <div class="row user-social-detail">
              <div class="col-lg-12 col-sm-12 col-12">
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
          </div>
      </div>
    </div>
  </div>;
  }
}

export default Profile;
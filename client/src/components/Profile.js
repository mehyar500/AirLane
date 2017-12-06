import React, { Component } from "react";
import API from "../Utils/API";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./Profile.css";

class Profile extends Component {
  state = {
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

  componentDidMount() {
    API.userAuth();
    API.getUser();
  }

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
    // const {firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom} = this.state;
    // API.saveUser(firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom).then(console.log(firstName, lastName, emailAddress, jetModel, jstId, jstLocation, maxocc, smoking, wifi, phone, entertainment, bedroom)).catch(err => console.log("Signup.js API call " + err))
  };

  render() {
    return <div class="container">
    <h1>Edit Profile</h1>
  	<hr/>
	<div class="row">
      {/* <!-- left column --> */}
      <div class="col-md-3">
        <div class="text-center">
          <img src="//placehold.it/100" class="avatar img-circle" alt="avatar"/>
          <h6>Upload a different photo...</h6>
          
          <input type="file" class="form-control"/>
        </div>
      </div>
      
      {/* <!-- edit form column --> */}
      <div class="col-md-9 personal-info">
        <h3>Personal info</h3>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={this.state.firstName}/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="Bishop"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Company:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="janesemail@gmail.com"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Time Zone:</label>
            <div class="col-lg-8">
              <div class="ui-select">
                <select id="user_time_zone" class="form-control">
                  <option value="Hawaii">(GMT-10:00) Hawaii</option>
                  <option value="Alaska">(GMT-09:00) Alaska</option>
                  <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option value="Arizona">(GMT-07:00) Arizona</option>
                  <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Username:</label>
            <div class="col-md-8">
              <input class="form-control" type="text" value="janeuser"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label">Confirm password:</label>
            <div class="col-md-8">
              <input class="form-control" type="password" value="11111122333"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-primary" value="Save Changes"/>
              <span></span>
              <input type="reset" class="btn btn-default" value="Cancel"/>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>;
  }
}

export default Profile;




{/* <div className="container">
  <form action="/profile">
    <FormGroup>
      <ControlLabel htmlFor="firstName">First Name</ControlLabel>
      <FormControl
        name="firstName"
        type="text"
        placeholder="ex: Tom"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor="lastName">Last Name</ControlLabel>
      <FormControl
        name="lastName"
        type="text"
        placeholder="ex: Smith"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor="emailAddress">Eamil</ControlLabel>
      <FormControl
        name="emailAddress"
        type="email"
        placeholder="ex: tomSmith@email.com"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor="jetModel">Jet's Model</ControlLabel>
      <FormControl
        name="jetModel"
        type="text"
        placeholder="Jet Model"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor="jstId">Jet's Identification</ControlLabel>
      <FormControl
        name="jstId"
        type="text"
        placeholder="Jet's Identification"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor="jstLocation">Jet's Identification</ControlLabel>
      <FormControl
        name="jstLocation"
        type="text"
        placeholder="Jet's Location"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup controlId="maxocc">
      <ControlLabel>Max Occupancy</ControlLabel>
      <FormControl name="maxocc" componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">6</option>
        <option value="other">8</option>
        <option value="other">10</option>
        <option value="other">12</option>
        <option value="other">14</option>
        <option value="other">16</option>
        <option value="other">18</option>
        <option value="other">20</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="phone">
      <ControlLabel>Satcom Phone</ControlLabel>
      <FormControl name="phone" componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">Yes</option>
        <option value="other">No</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="wifi">
      <ControlLabel>Wi-Fi</ControlLabel>
      <FormControl name="wifi" componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">Yes</option>
        <option value="other">No</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="entertainment">
      <ControlLabel>Entertainment Center</ControlLabel>
      <FormControl
        name="entertainment"
        componentClass="select"
        placeholder="select"
      >
        <option value="select">select</option>
        <option value="other">Yes</option>
        <option value="other">No</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="bedroom">
      <ControlLabel>Den, Master Bedroom</ControlLabel>
      <FormControl name="bedroom" componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">Yes</option>
        <option value="other">No</option>
      </FormControl>
    </FormGroup>

    <Button
      bsStyle="primary"
      type="submit"
      value="submit"
      onClick={this.handleSubmit}
    >
      Submit
    </Button>
  </form>
</div> */}
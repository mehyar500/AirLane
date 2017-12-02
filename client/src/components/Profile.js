import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
      return (
        <div className="container one">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h1>Your Name Here</h1>
              <div className="account">Account info here</div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      );
  }

}

export default Profile;

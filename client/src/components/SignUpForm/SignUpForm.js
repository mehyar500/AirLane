import React, { Component } from "react";


export default class Signup extends Component {

    render() {
        return <div className="row">
            <form id="signup-form" className="form-inline" role="form" action="#">
              <div className="form-group">
                <input id="signup-first-name" className="first-name form-control input-md" type="first-name" placeholder="First Name" />
              </div>
              <div className="form-group">
                <input id="signup-last-name" className="last-name form-control input-md" type="last-name" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input id="signup-email" className="email form-control input-md" type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input id="signup-password" className="form-control input-md" type="password" placeholder="Password / Blank" />
              </div>
              <div className="form-group">
                <button id="signup-button" type="submit" className="btn btn-success btn-md">
                  Signup
                </button>
              </div>
            </form>
          </div>;
    }
};
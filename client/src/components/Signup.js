import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="grid">
            <div className="grid-cell">
              <div>
                <h1>Welcome Aboard</h1>
                <span>Already have an account?</span>
                <a href="">Sign in</a>
              </div>
              <div>
                <div>
                  <a className="btn button-blue" href="/signup/auth/facebook">
                    <span>Join With FaceBook</span>
                  </a>
                </div>
                <div>
                  <a className="btn button-blue" href="/signup/auth/google">
                    <span>Join With google</span>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <div className="divider ">
                    <div>or</div>
                  </div>
                </div>
              </div>
              <form action="/signup">
                <div className="grid">
                  <div className="grid-cell">
                    <input
                      type="text"
                      className="inputText"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>
                  <div className="grid-cell">
                    <input
                      type="text"
                      className="inputText"
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </div>
                  <div className="grid-cell">
                    <input
                      type="email"
                      className="inputText"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div className="grid-cell">
                    <input
                      type="password"
                      className="inputText"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                </div>
                <p>
                  <span>By joinging you agree to the</span>
                  <a href="" />
                </p>
                <button className="btn btn-success" typ="submit">
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
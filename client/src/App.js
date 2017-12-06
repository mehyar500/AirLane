import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Appbar from "./components/Appbar";
import Appbody from "./components/Appbody";
import Appfooter from "./components/Appfooter";
import NewPlane from "./components/NewPlane";
import newlane from "./components/NewLane";
import Partner from "./components/Partner";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";


import "./App.css";

class App extends Component {
  render() {
    return <Router>
        <div>
          <Appbar />
          <Switch>
            <Route exact path="/" component={Appbody} />
            <Route exact path="/newplane" component={NewPlane} />
            <Route exact path="/newlane" component={NewPlane} />
            <Route exact path="/about" component={About} />
            <Route exact path="/partner" component={Partner} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Appfooter />
        </div>
      </Router>;
  }
}

export default App;

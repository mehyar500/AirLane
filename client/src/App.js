import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Appbar from "./components/Appbar";
import Appbody from "./components/Appbody";
import NewPlane from "./components/NewPlane";
import Partner from "./components/Partner";
import Profile from "./components/Profile";
import NewResevation from "./components/NewResevation";
import "./App.css";

class App extends Component {
  render() {
    return <Router>
        <div>
          <Appbar />
          <Switch>
            <Route exact path="/" component={Appbody} />
            <Route exact path="/newplane" component={NewPlane} />
            <Route exact path="/about" component={About} />
            <Route exact path="/partner" component={Partner} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>;
  }
}

export default App;

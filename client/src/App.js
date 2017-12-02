import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from "./components/Appbar";
import Appbody from "./components/Appbody";
import NewPlane from "./components/NewPlane";
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
            <Route exact path="/NewResevation" component={NewResevation} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>;
  }
}

export default App;

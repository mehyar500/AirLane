import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from "./components/Appbar";
import Appbody from "./components/Appbody";
import Profile from "./components/Profile";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  render() {
    return <Router>
        <div>
          <Appbar />
          <Switch>
            <Route exact path="/" component={Appbody} />
            <Route path="/search" component={Search} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>;
  }
}

export default App;

import React, { Component } from 'react';
import Appbar from "./components/Appbar";
import Appbody from "./components/Appbody";

class App extends Component {
  render() {
    return <div className="App">
        <Appbar />
        <Appbody />
        {/* <Results /> */}
      </div>;
  }
}

export default App;

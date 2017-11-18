import Signup from './components/SignUpForm/SignUpForm';
import React, { Component } from 'react';
import SignUpForm from "./components/SignUpForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;

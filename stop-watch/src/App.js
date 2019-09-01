import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
		  <h2>Welcome to Timer App built on React JS</h2>
        </header>
		<Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Display from './components/Display.js';
import Keys from './components/Keys.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <Title />
          </div>
          <div className="display">
            <Display />
          </div>
          <div className="keys">
              <Keys />
              </div>
            </div>
          </div>
    );
  }
}

export default App;

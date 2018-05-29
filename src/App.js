import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { renderRoutes } from 'react-router-config';
import globalRouter from './views/router';
import DevTools from './devtools';

const routes = [
  ...globalRouter
]

class App extends Component {
  render() {
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
      </div>
    );
    */
    return (
      <Router {...this.props}>
        <div>
          {renderRoutes(routes)}
          <DevTools />
        </div>
      </Router>
    )
  }
  componentDidMount () {
    console.log(this)
  }
}

export default App;

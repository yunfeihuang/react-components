import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import { renderRoutes } from 'react-router-config';
import globalRouter from './views/router';
// import DevTools from './devtools';

const routes = [
  ...globalRouter
]

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {renderRoutes(routes)}
        </div>
      </Router>
    )
  }
}

export default App;

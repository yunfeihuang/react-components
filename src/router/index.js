import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Mine from '../views/Mine'
// const Home = () => { return import('../views/Home') }
// const Mine = () => { return import('../views/Mine') }

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mine" component={Mine} />
      </Switch>
    )
  }
}

export default Router

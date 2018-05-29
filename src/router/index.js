import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Mine from '../views/Mine'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions'

let _Home = connect((state) => {
  return state
}, (dispatch) => {
  return {
    addTodo: () => dispatch(addTodo())
  }
})(Home)

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={_Home} />
        <Route path="/mine" component={Mine} />
      </Switch>
    )
  }
}

export default Router

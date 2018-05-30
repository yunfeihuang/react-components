import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mine extends Component {
  render() {
    return (
      <div>
        Mine
        <Link to="/">Home</Link>
        {this.props.state.todo.counter}
        <button onClick={this.handleClick.bind(this)}>点击累加</button>
      </div>
    );
  }
  componentDidMount () {
    this.props.dispatch('todo/add', 1)
  }
  handleClick () {
    this.props.dispatch('todo/add', 1)
  }
}

export default Mine;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home {this.props.state.todo.counter}
        <Link to="/mine">Mine</Link>
        <button onClick={this.handleClick.bind(this)}>点击累加</button>
      </div>
    );
  }
  componentDidMount () {
    console.log(this)
    this.props.dispatch('todo/add', 1)
  }
  handleClick () {
    this.props.dispatch('todo/add', 1)
  }
}

export default Home;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mine extends Component {
  render() {
    return (
      <div>
        Mine
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Mine;

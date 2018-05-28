import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/mine">Mine</Link>
      </div>
    );
  }
}

export default Home;

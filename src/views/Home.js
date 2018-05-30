import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '@/components'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Nav isBack={false} title="Vx UI Demo"/>
        <Link to="/demos/button">Button</Link>
        <Link to="/demos/actionsheet">Actionsheet</Link>
        <Link to="/mine">mine</Link>
      </div>
    );
  }
}

export default Home;

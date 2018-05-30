import React, { Component } from 'react';
import { Button, Nav } from '@/components'

class Demo extends Component {
  render() {
    return (
      <div>
        <Nav title="Button"/>
        <div style={{padding:'10px'}}>
          <Button>default</Button>
          <Button type="primary">primary</Button>
          <Button type="danger">danger</Button>
          <Button type="warning">warning</Button>
          <Button type="link">link</Button>
          <br/>
          <br/>
          <Button type="primary" size="large">primary</Button>
          <br/>
          <Button type="danger" size="large">danger</Button>
          <br/>
          <Button type="warning" size="large">warning</Button>
          <br/>
          <Button type="primary" disabled size="large">primary</Button>
          <br/>
          <Button type="primary" plain size="large">primary</Button>
        </div>
      </div>
    );
  }
}

export default Demo;

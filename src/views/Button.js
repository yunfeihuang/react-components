import React, { Component } from 'react';
import { Button, Nav, Popup } from '@/components'

class Demo extends Component {
  state = {
    open: false
  }
  render() {
    return (
      <div>
        <Popup open={this.state.open} onClose={this.handleClose.bind(this)}><span>fdsafdsafds</span></Popup>
        <Nav title="Button"/>
        <div style={{padding:'10px'}}>
          <Button onClick={() => {this.setState({open: true})}}>default</Button>
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
  handleClose () {
    this.setState({
      open: false
    })
  }
}

export default Demo;

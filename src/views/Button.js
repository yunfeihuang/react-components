import React from 'react';
import { Button, Nav, Popup } from '@/components'

class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleClose = this.handleClose.bind(this)
  }
  render() {
    return (
      <div>
        <Popup open={this.state.open} onClose={this.handleClose}>
          <span>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/></span>
          <span>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/>fdsafdsafds<br/></span>
        </Popup>
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

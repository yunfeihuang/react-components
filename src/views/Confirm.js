import React, { Component } from 'react';
import { Layout, Nav, Body, Confirm, Switch, Cell, Group} from '@/components'

class Demo extends Component {
  state = {
    open: false
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Confirm"/>
        <Body slot="body">
          <Group>
            <Cell title="default">
              <Switch value={this.state.open} onChange={this.handleChange.bind(this)} />
            </Cell>
          </Group>
        </Body>
        <Confirm open={this.state.open} onClose={this.handleClose.bind(this)} onConfirm={this.handleConfirm.bind(this)}>
          确认删除我么
        </Confirm>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      open: value
    })
  }
  handleClose () {
    this.handleChange(false)
  }
  handleConfirm () {
    this.handleChange(false)
  }
}

export default Demo;

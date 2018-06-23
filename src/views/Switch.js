import React from 'react';
import { Layout, Body, Nav, Group, Cell, Switch } from '@/components'

class Demo extends React.Component {
  state = {
    open: false
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Switch"/>
        <Body slot="body">
          <Group>
            <Cell title={'开关：'+this.state.open}>
              <Switch value={this.state.open} onChange={this.handleChange.bind(this)} />
            </Cell>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      open: value
    })
  }
}

export default Demo;

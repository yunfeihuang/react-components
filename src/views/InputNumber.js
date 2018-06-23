import React from 'react';
import { Layout, Body, Nav, Group, Cell, InputNumber } from '@/components'

class Demo extends React.Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="InputNumber"/>
        <Body slot="body">
          <Group>
            <Cell title={'value：'+this.state.value}>
              <InputNumber value={this.state.value} onChange={this.handleChange.bind(this)} />
            </Cell>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
}

export default Demo;

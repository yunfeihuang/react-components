import React from 'react';
import { Layout, Body, Nav, Input, Group } from '@/components'

class Demo extends React.Component {
  state = {value: ''}
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Input"/>
        <Body slot="body">
          <Group title="default">
            <Input placeholder="请输入" value={this.state.value} onChange={this.handleChange.bind(this)}/>
          </Group>
          <Group title="disabled">
            <Input disabled={true} value={this.state.value}/>
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

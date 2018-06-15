import React from 'react';
import { Layout, Body, Nav, Password, Group } from '@/components'

class Demo extends React.Component {
  state = {
    value: ''
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Password"/>
        <Body slot="body">
          <Group title="default">
            <Password placeholder="请输入" value={this.state.value} onChange={this.handleChange.bind(this)}/>
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

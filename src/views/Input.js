import React from 'react';
import { Layout, Body, Nav, Input, Group } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Input"/>
        <Body slot="body">
          <Group title="default">
            <Input placeholder="请输入" />
          </Group>
          <Group title="disabled">
            <Input disabled={true} value="disabled"/>
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

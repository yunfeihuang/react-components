import React from 'react';
import { Layout, Body, Nav, Group, Cell } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Cell"/>
        <Body slot="body">
          <Group>
            <Cell icon="icon" title="title" value="value" arrow={true} />
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

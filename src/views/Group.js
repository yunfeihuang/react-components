import React from 'react';
import { Layout, Body, Nav, Group, Cell } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Group"/>
        <Body slot="body">
          <Group title="group title">
            <Cell icon="icon" title="title" value="value" arrow={true} />
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

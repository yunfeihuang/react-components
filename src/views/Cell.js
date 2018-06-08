import React from 'react';
import { Nav, Layout, Group, Cell } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Cell"/>
        <div slot="body">
          <Group>
            <Cell icon="icon" title="title" value="value" arrow={true} />
          </Group>
        </div>
      </Layout>
    );
  }
}

export default Demo;

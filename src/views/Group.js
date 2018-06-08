import React from 'react';
import { Nav, Layout, Group, Cell } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Group"/>
        <div slot="body">
          <Group title="group title">
            <Cell icon="icon" title="title" value="value" arrow={true} />
          </Group>
        </div>
      </Layout>
    );
  }
}

export default Demo;

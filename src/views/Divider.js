import React from 'react';
import { Nav, Layout, Group, Cell, Divider } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Divider"/>
        <div slot="body">
          <Group>
            <div style={{lineHeight: '40px', padding: '0 10px'}}>
              标题
              <Divider/>
              内容....
            </div>
          </Group>
        </div>
      </Layout>
    );
  }
}

export default Demo;

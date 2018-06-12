import React from 'react';
import { Layout, Body, Nav, Group, Divider } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Divider"/>
        <Body slot="body">
          <Group>
            <div style={{lineHeight: '40px', padding: '0 10px'}}>
              标题
              <Divider/>
              内容....
            </div>
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

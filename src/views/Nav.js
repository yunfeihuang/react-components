import React from 'react';
import { Layout, Nav } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Nav" backText="返回" pull={<span style={{marginRight: '10px'}}>更多</span>}/>
      </Layout>
    );
  }
}

export default Demo;

import React from 'react';
import { Layout, Nav } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <div slot="header">
          <Nav title="Nav" backText="返回" pull={<span style={{marginRight: '10px'}}>更多</span>}/>
          <br />
          <Nav title="Nav" type="primary" backText="返回" pull={<span style={{marginRight: '10px'}}>更多</span>}/>
        </div>
      </Layout>
    );
  }
}

export default Demo;

import React from 'react';
import { Nav, Layout } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Nav" pull={<span style={{marginRight: '10px'}}>更多</span>}/>
      </Layout>
    );
  }
}

export default Demo;

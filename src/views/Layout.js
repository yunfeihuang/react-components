import React from 'react';
import { Layout, Body, Nav } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Layout --- header area"/>
        <Body slot="body">body area</Body>
        <div slot="footer">footer area</div>
        <div>other area</div>
      </Layout>
    );
  }
}

export default Demo;

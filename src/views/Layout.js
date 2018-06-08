import React from 'react';
import { Button, Nav, Layout } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Layout --- header area"/>
        <div slot="body">body area</div>
        <div slot="footer">footer area</div>
        <div>other area</div>
      </Layout>
    );
  }
}

export default Demo;

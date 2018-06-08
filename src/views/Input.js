import React from 'react';
import { Button, Nav, Layout } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Button"/>
        <div slot="body" style={{padding:'10px'}}>
          <Button>default</Button>
          <Button type="primary">primary</Button>
          <Button type="danger">danger</Button>
          <Button type="warning">warning</Button>
          <Button type="link">link</Button>
          <br/>
          <br/>
          <Button type="primary" size="large">primary</Button>
          <br/>
          <Button type="danger" size="large">danger</Button>
          <br/>
          <Button type="warning" size="large">warning</Button>
          <br/>
          <Button type="primary" disabled size="large">primary</Button>
          <br/>
          <Button type="primary" plain size="large">primary</Button>
        </div>
      </Layout>
    );
  }
}

export default Demo;

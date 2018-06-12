import React from 'react';
import { Layout, Body, Nav, Button } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Button"/>
        <Body slot="body" style={{padding:'10px',background: '#fff'}}>
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
        </Body>
      </Layout>
    );
  }
}

export default Demo;

import React from 'react';
import { Layout, Body, Nav, Message } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Message"/>
        <Body slot="body">
          <Message>注意：此示例要在移动设备体验哦~</Message>
          <br/>
          <Message type="danger">注意：此示例要在移动设备体验哦~</Message>
          <br/>
          <Message type="success">注意：此示例要在移动设备体验哦~</Message>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

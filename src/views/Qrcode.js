import React from 'react';
import { Layout, Body, Nav, Qrcode } from '../components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Qrcode"/>
        <Body slot="body" style={{textAlign: 'center', padding: '0.5rem 0'}}>
          <Qrcode text="http://vue.bittyos.com/"/>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

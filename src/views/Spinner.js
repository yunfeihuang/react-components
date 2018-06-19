import React, { Component } from 'react';
import { Layout, Nav, Body, Spinner} from '@/components'

class Demo extends Component {
  state = {
    open: false
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Spinner"/>
        <Body slot="body" style={{textAlign: 'center'}}>
          <br/>
          <Spinner />
          <br/>
          <br/>
          <br/>
          <Spinner style={{height:'50px',width:'50px'}}>
            <span style={{lineHeight:'50px'}}>LOGO</span>
          </Spinner>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

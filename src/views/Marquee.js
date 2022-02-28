import React from 'react';
import { Layout, Body, Nav, Marquee, MarqueeItem } from '../components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Marquee"/>
        <Body slot="body">
          <Marquee>
            <MarqueeItem>
              天猫双十一优惠！
            </MarqueeItem>
            <MarqueeItem>
              京东618优惠！
            </MarqueeItem>
          </Marquee>
          <Marquee direction="horizontal">
            <MarqueeItem>
              天猫双十一优惠！
            </MarqueeItem>
            <MarqueeItem>
              京东618优惠！
            </MarqueeItem>
          </Marquee>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

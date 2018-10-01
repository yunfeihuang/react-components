import React from 'react';
import { Layout, Body, Nav, Flexbox, FlexboxItem } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Flexbox"/>
        <Body slot="body" className="flexbox-demo">
          ### 平均跨度
          <Flexbox gutter={10}>
            <FlexboxItem>1</FlexboxItem>
            <FlexboxItem>2</FlexboxItem>
            <FlexboxItem>3</FlexboxItem>
          </Flexbox>
          <br />
          ### 跨度
          <Flexbox gutter={10}>
            <FlexboxItem>1</FlexboxItem>
            <FlexboxItem flex="2">2</FlexboxItem>
            <FlexboxItem flex="3">3</FlexboxItem>
          </Flexbox>
          <br />
          ### 列布局
          <Flexbox direction="column">
            <FlexboxItem>1</FlexboxItem>
            <FlexboxItem style={{margin:'10px 0'}}>2</FlexboxItem>
            <FlexboxItem>3</FlexboxItem>
          </Flexbox>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

import React from 'react';
import { Nav, Layout, Flexbox, FlexboxItem } from '@/components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Flexbox"/>
        <div slot="body" className="flexbox-demos">
          <Flexbox gutter={10}>
            <FlexboxItem>
              <div className="flexbox-item">1</div>
            </FlexboxItem>
            <FlexboxItem>
              <div className="flexbox-item">2</div>
            </FlexboxItem>
            <FlexboxItem>
              <div className="flexbox-item">3</div>
            </FlexboxItem>
          </Flexbox>

          ### 跨度
          <Flexbox gutter={10}>
            <FlexboxItem>
              <div className="flexbox-item">1</div>
            </FlexboxItem>
            <FlexboxItem flex="2">
              <div className="flexbox-item">2</div>
            </FlexboxItem>
            <FlexboxItem flex="3">
              <div className="flexbox-item">3</div>
            </FlexboxItem>
          </Flexbox>

          ### 列布局
          <Flexbox direction="column">
            <FlexboxItem>
              <div className="flexbox-item">1</div>
            </FlexboxItem>
            <FlexboxItem style={{margin:'10px 0'}}>
              <div className="flexbox-item">2</div>
            </FlexboxItem>
            <FlexboxItem>
              <div className="flexbox-item">3</div>
            </FlexboxItem>
          </Flexbox>

          ### 项目换行
          <Flexbox wrap="wrap" className="flex-wrap">
            <FlexboxItem width="25%">
              <div className="flexbox-item">1</div>
            </FlexboxItem>
            <FlexboxItem width="25%">
              <div className="flexbox-item">2</div>
            </FlexboxItem>
            <FlexboxItem width="25%">
              <div className="flexbox-item">3</div>
            </FlexboxItem>
            <FlexboxItem width="25%">
              <div className="flexbox-item">4</div>
            </FlexboxItem>
            <FlexboxItem width="25%">
              <div className="flexbox-item">5</div>
            </FlexboxItem>
            <FlexboxItem width="25%">
              <div className="flexbox-item">6</div>
            </FlexboxItem>
          </Flexbox>
        </div>
      </Layout>
    );
  }
}

export default Demo;

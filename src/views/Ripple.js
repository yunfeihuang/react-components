import React from 'react';
import { Layout, Nav, Body, Ripple, Group, Divider} from '../components'

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Ripple"/>
        <Body slot="body">
          <Group style={{lineHeight: '0.92rem'}}>
            <Ripple>
              点击我会出现波纹
            </Ripple>
            <Divider />
            <Ripple>
              点击我会出现波纹
            </Ripple>
            <Divider />
            <Ripple color="rgba(255,0,0,0.1)">
              自定义颜色(prop color:rgba(255,0,0,0.1))
            </Ripple>
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Demo;

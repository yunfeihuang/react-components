import React from 'react';
import { Layout, Body, Nav, Tabbar, TabbarItem, Icon} from '@/components'

class Demo extends React.Component {
  state = {
    active: 'home'
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Tabbar"/>
        <Body slot="body"></Body>
        <Tabbar slot="footer" ripple={true} active={this.state.active} onChange={this.handleChange.bind(this)}>
          <TabbarItem name="home">
            <Icon>&#xe651;</Icon>
            <span>主页</span>
          </TabbarItem>
          <TabbarItem name="message">
            <Icon>&#xe653;</Icon>
            <span>消息</span>
          </TabbarItem>
          <TabbarItem name="my">
            <Icon>&#xe63b;</Icon>
            <span>我的</span>
          </TabbarItem>
        </Tabbar>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      active: value
    })
  }
}

export default Demo;

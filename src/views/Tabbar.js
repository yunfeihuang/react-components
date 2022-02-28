import React from 'react';
import { Layout, Body, Nav, Tabbar, TabbarItem} from '../components'

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
            <i style={{fontSize:'0.5rem',margin: '-0.1rem'}}>★</i>
            <small>主页</small>
          </TabbarItem>
          <TabbarItem name="message">
            <i style={{fontSize:'0.5rem',margin: '-0.1rem'}}>♡</i>
            <small>消息</small>
          </TabbarItem>
          <TabbarItem name="my">
            <i style={{fontSize:'0.5rem',margin: '-0.1rem'}}>★</i>
            <small>我的</small>
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

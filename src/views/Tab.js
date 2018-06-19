import React, { Component } from 'react';
import { Layout, Body, Nav, Tab, TabItem } from '@/components'

class Demo extends Component {
  state = {
    active: 'recommed',
    items: [
      {name: 'recommed', label: '推荐'},
      {name: 'it', label: '科技'},
      {name: 'active', label: '活动'},
      {name: 'find', label: '发现'}
    ]
  }
  render() {
    let items = this.state.items.map((item, index) => {
      return <TabItem name={item.name} key={index}>{item.label}</TabItem>
    })
    return (
      <Layout>
        <Nav slot="header" title="Tab"/>
        <Body slot="body">
          <Tab active={this.state.active} onChange={this.handleChange.bind(this)}>
            {items}
          </Tab>
          <Tab active={this.state.active} underlineWidth="10" onChange={this.handleChange.bind(this)}>
            {items}
          </Tab>
          <Tab active={this.state.active} underlineWidth="auto"onChange={this.handleChange.bind(this)}>
            {items}
          </Tab>
        </Body>
        
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

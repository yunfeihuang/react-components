import React from 'react';
import { Layout, Body, Nav, Tab, TabItem } from '../components'

class Demo extends React.Component {
  state = {
    active: 'recommed',
    items: [
      {name: 'recommed', label: '推荐'},
      {name: 'it', label: '科技'},
      {name: 'active', label: '活动'},
      {name: 'find', label: '发现'},
      {name: 'sort', label: '排行'},
      {name: 'msg', label: '消息'},
      {name: 'sns', label: '社区'}
    ]
  }
  render() {
    let items = this.state.items.slice(0,4).map((item, index) => {
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
          <Tab active={this.state.active} underlineWidth="10" layout="scroll" onChange={this.handleChange.bind(this)}>
            {this.state.items.map((item, index) => {
              return <TabItem name={item.name} key={index}>{item.label}</TabItem>
            })}
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

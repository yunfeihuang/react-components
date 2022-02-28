import React from 'react';
import { Layout, Body, Nav, Sidebar, SidebarItem} from '../components'

let data = []
for (let i = 0; i < 20; i++) {
  data.push({
    name: i,
    label: `选项${i}`
  })
}
class Demo extends React.Component {
  state = {
    active: 0,
    data
  }
  style = {
    width:'80px',
    background:'#f7f7f7',
    position:'absolute',
    height:'100%'
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Sidebar"/>
        <Body slot="body" style={{background:'#fff'}}>
          <Sidebar style={this.style} active={this.state.active} onChange={this.handleChange.bind(this)}>
            {this.state.data.map((item, i) => {
              return <SidebarItem key={i} name={item.name}>{item.label}</SidebarItem>
            })}
          </Sidebar>
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

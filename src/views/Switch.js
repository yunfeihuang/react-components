import React from 'react';
import { Layout, Body, Nav, Group, Cell, Switch } from '../components'

class Demo extends React.Component {
  state = {
    open: false,
    value: '0'
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Switch"/>
        <Body slot="body">
          <Group>
            <Cell title={'开关：'+this.state.open}>
              <Switch value={this.state.open} onChange={this.handleChange.bind(this)} />
            </Cell>
          </Group>
          <Group title="small">
            <Cell arrow={false} title={'开关：' + this.state.open}>
              <Switch size="small" value={this.state.open} onChange={this.handleChange.bind(this)}/>
            </Cell>
          </Group>
          <Group title="offValue:0,onValue:1">
            <Cell arrow={false} title={'开关：' + this.state.value}>
              <Switch value={this.state.value} onValue="1" offValue="0" onChange={this.handleChange2.bind(this)}/>
            </Cell>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (value) {
    console.log(value)
    this.setState({
      open: value
    })
  }
  handleChange2 (value) {
    this.setState({
      value
    })
  } 
}

export default Demo;

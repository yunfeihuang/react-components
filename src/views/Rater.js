import React, { Component } from 'react';
import { Layout, Nav, Body, Rater, Cell, Group} from '@/components'

class Demo extends Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Rater"/>
        <Body slot="body">
          <Group>
            <Cell title={`评分${this.state.value}`} arrow={false}>
              <Rater value={this.state.value} onChange={this.handleChange.bind(this)}/>
            </Cell>
            <Cell title={`评分${this.state.value}`} arrow={false}>
              <Rater value={this.state.value} color="rgb(255, 204, 102)" onChange={this.handleChange.bind(this)}/>
            </Cell>
            <Cell title={`评分${this.state.value}`} arrow={false}>
              <Rater value={this.state.value} star="♡" onChange={this.handleChange.bind(this)}/>
            </Cell>
            <Cell title={`评分${this.state.value}`} arrow={false}>
              <Rater value={this.state.value} star="♡" color="rgb(255, 204, 102)" onChange={this.handleChange.bind(this)}/>
            </Cell>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
}

export default Demo;

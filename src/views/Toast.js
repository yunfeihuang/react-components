import React, { Component } from 'react';
import { Layout, Nav, Body, Toast, Switch, Cell, Group} from '@/components'

class Demo extends Component {
  state = {
    topOpen: false,
    centerOpen: false,
    loadingOpen: false,
    bottomOpen: false,
    failOpen: false,
    warnOpen: false,
    content: '操作成功'
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Toast"/>
        <Body slot="body">
          <Group>
            <Cell title="Toast Top">
              <Switch value={this.state.topOpen} onChange={this.handleChange.bind(this, 'topOpen')} />
            </Cell>
            <Cell title="Toast Center Success">
              <Switch value={this.state.centerOpen} onChange={this.handleChange.bind(this, 'centerOpen')} />
            </Cell>
            <Cell title="Toast Center Fail">
              <Switch value={this.state.failOpen} onChange={this.handleChange.bind(this, 'failOpen')} />
            </Cell>
            <Cell title="Toast Center Warn">
              <Switch value={this.state.warnOpen} onChange={this.handleChange.bind(this, 'warnOpen')} />
            </Cell>
            <Cell title="Toast Center Loading">
              <Switch value={this.state.loadingOpen} onChange={this.handleChange.bind(this, 'loadingOpen')} />
            </Cell>
            <Cell title="Toast Bottom">
              <Switch value={this.state.bottomOpen} onChange={this.handleChange.bind(this, 'bottomOpen')} />
            </Cell>
          </Group>
        </Body>
        <Toast open={this.state.topOpen} onClose={this.handleClose.bind(this, 'topOpen')}>{this.state.content}</Toast>
        <Toast open={this.state.centerOpen} type="success" align="center"  onClose={this.handleClose.bind(this, 'centerOpen')}>{this.state.content}</Toast>
        <Toast open={this.state.failOpen} type="fail" align="center" onClose={this.handleClose.bind(this, 'failOpen')}>操作失败</Toast>
        <Toast open={this.state.warnOpen} type="warn" align="center" onClose={this.handleClose.bind(this, 'warnOpen')}>已经操作过了</Toast>
        <Toast open={this.state.loadingOpen} type="loading" align="center" onClose={this.handleClose.bind(this, 'loadingOpen')}>Loading</Toast>
        <Toast open={this.state.bottomOpen} align="bottom" onClose={this.handleClose.bind(this, 'bottomOpen')}>{this.state.content}</Toast>
      </Layout>
    );
  }
  handleChange (key, value) {
    let state = {...this.state}
    state[key] = value
    this.setState(state)
  }
  handleClose (key) {
    let state = {...this.state}
    state[key] = false
    this.setState(state)
  }
}

export default Demo;

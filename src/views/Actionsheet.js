import React, { Component } from 'react';
import { Layout, Body, Actionsheet, ActionsheetItem, Switch, Nav, Cell, Group} from '@/components'

class Demo extends Component {
  state = {
    open1: false,
    open2: false,
    open3: false,
    options: [
      {
        value: '1',
        label: '编辑'
      },
      {
        value: '2',
        label: '收藏'
      },
      {
        value: '3',
        label: '分享'
      },
      {
        value: '4',
        label: '删除'
      }
    ]
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Actionsheet"/>
        <Body slot="body">
          <Group>
            <Cell title="default" value={<Switch value={this.state.open1} onChange={this.handleChange.bind(this, 1)} />} />
            <Cell title="cancel && title" value={<Switch value={this.state.open2} onChange={this.handleChange.bind(this, 2)} />} />
            <Cell title="menu" value={<Switch value={this.state.open3} onChange={this.handleChange.bind(this, 3)} />} />
          </Group>
        </Body>
        <Actionsheet open={this.state.open1} onClose={this.handleClose.bind(this, 1)}>
          {this.state.options.map((item, index) => {
            return <ActionsheetItem value={item.value} key={index}>{item.label}</ActionsheetItem>
          })}
        </Actionsheet>
        <Actionsheet open={this.state.open2} onClose={this.handleClose.bind(this, 2)} cancel={true} title="title">
          {this.state.options.map((item, index) => {
            return <ActionsheetItem value={item.value} key={index}>{item.label}</ActionsheetItem>
          })}
        </Actionsheet>
        <Actionsheet open={this.state.open3} onClose={this.handleClose.bind(this, 3)} type="menu">
          {this.state.options.map((item, index) => {
            return <ActionsheetItem value={item.value} key={index}>{item.label}</ActionsheetItem>
          })}
        </Actionsheet>
      </Layout>
    );
  }
  handleChange (key, value) {
    let state = {
      ...this.state
    }
    state['open' + key] = value
    this.setState(state)
  }
  handleClose (key) {
    this.handleChange(key, false)
  }
}

export default Demo;

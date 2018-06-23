import React from 'react';
import { Layout, Body, Actionsheet, ActionsheetItem, Switch, Nav, Cell, Group} from '@/components'

class Demo extends React.Component {
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
    let options = this.state.options.map((item, index) => {
      return <ActionsheetItem value={item.value} key={index}>{item.label}</ActionsheetItem>
    })
    return (
      <Layout>
        <Nav slot="header" title="Actionsheet"/>
        <Body slot="body">
          <Group>
            <Cell title="default">
              <Switch value={this.state.open1} onChange={this.handleChange.bind(this, 1)} />
            </Cell>
            <Cell title="cancel && title">
              <Switch value={this.state.open2} onChange={this.handleChange.bind(this, 2)} />
            </Cell>
            <Cell title="menu">
              <Switch value={this.state.open3} onChange={this.handleChange.bind(this, 3)} />
            </Cell>
          </Group>
        </Body>
        <Actionsheet open={this.state.open1} onClose={this.handleClose.bind(this, 1)} onClick={this.handleClick.bind(this)}>
          {options}
        </Actionsheet>
        <Actionsheet open={this.state.open2} onClose={this.handleClose.bind(this, 2)} cancel={true} title="title" onClick={this.handleClick.bind(this)}>
          {options}
        </Actionsheet>
        <Actionsheet open={this.state.open3} onClose={this.handleClose.bind(this, 3)} type="menu" onClick={this.handleClick.bind(this)}>
          {options}
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
  handleClick (value) {
    console.log('点击了' + value)
  }
  handleClose (key) {
    this.handleChange(key, false)
  }
}

export default Demo;

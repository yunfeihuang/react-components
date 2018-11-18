import React from 'react';
import { Layout, Nav, Body, Confirm, Switch, Cell, Group} from '@/components'

class Demo extends React.Component {
  state = {
    open: false,
    open2: false
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Confirm"/>
        <Body slot="body">
          <Group>
            <Cell title="default">
              <Switch value={this.state.open} onChange={this.handleChange.bind(this)} />
            </Cell>
            <Cell title="长文本">
              <Switch value={this.state.open2} onChange={this.handleChange2.bind(this)} />
            </Cell>
            <Cell title="js调用">
              <span onClick={this.handleClick}>点击我打开</span>
            </Cell>
          </Group>
        </Body>
        <Confirm title="标题文字" open={this.state.open} onClose={this.handleClose.bind(this)} onConfirm={this.handleConfirm.bind(this)}>
          确认删除我么
        </Confirm>
        <Confirm title="标题文字" open={this.state.open2} onClose={this.handleClose2.bind(this)} onConfirm={this.handleConfirm2.bind(this)}>
          <div style={{lineHeight: 2.5}}>
          长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
          内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
          容长内容长内容长内容长内容长内容长内容
          长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
          内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
          容长内容长内容长内容长内容长内容长内容
          长内容长内容长内容长内容长内容长内容长长内容长内容长内容长内容长内容长
          内容长内容长内容长内容长内容长内容长内容长内容长内容长内容内容长内容长内
          容长内容长内容长内容长内容长内容长内容
          </div>
        </Confirm>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      open: value
    })
  }
  handleClose () {
    this.handleChange(false)
  }
  handleConfirm () {
    this.handleChange(false)
  }
  handleChange2 (value) {
    this.setState({
      open2: value
    })
  }
  handleClose2 () {
    this.handleChange2(false)
  }
  handleConfirm2 () {
    this.handleChange2(false)
  }
  handleClick () {
    Confirm.open({
      message: 'Confirm'
    })
  }
}

export default Demo;

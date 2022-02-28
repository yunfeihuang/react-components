import React from 'react';
import { Layout, Nav, Body, Prompt, Switch, Cell, Group} from '../components'

class Demo extends React.Component {
  state = {
    open1: false,
    open2: false,
    value1: '',
    value2: ''
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Prompt"/>
        <Body slot="body">
          <Group>
            <Cell title={`default(${this.state.value1})`}>
              <Switch value={this.state.open1} onChange={this.handleChange1.bind(this)} />
            </Cell>
            <Cell title={`password(${this.state.value2})`}>
              <Switch value={this.state.open2} onChange={this.handleChange2.bind(this)} />
            </Cell>
            <Cell title="js调用">
              <span onClick={this.handleClick}>点击我打开</span>
            </Cell>
          </Group>
        </Body>
        <Prompt
          open={this.state.open1}
          title="用户名称"
          inputProps={{value: this.state.value1, placeholder: '请输入用户名'}}
          onClose={this.handleChange1.bind(this)}
          onConfirm={this.handleConfirm1.bind(this)} />
        <Prompt
          open={this.state.open2}
          title="wifi密码"
          inputProps={{type: 'password', value: this.state.value2, placeholder: '请输入wifi密码'}}
          onClose={this.handleChange2.bind(this)}
          onConfirm={this.handleConfirm2.bind(this)} />
      </Layout>
    );
  }
  handleChange1 (value = false) {
    this.setState({
      open1: value
    })
  }
  handleChange2 (value = false) {
    this.setState({
      open2: value
    })
  }
  handleConfirm1 (value) {
    this.handleChange1(false)
    this.setState({
      value1: value
    })
  }
  handleConfirm2 (value) {
    this.handleChange2(false)
    this.setState({
      value2: value
    })
  }
  handleClick () {
    Prompt.open({
      title: '用户名称',
      inputProps: {value: '', placeholder: '请输入用户名'},
      onConfirm (value) {
        console.log(value)
      }
    })
  }
}

export default Demo;

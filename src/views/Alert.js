import React from 'react';
import { Layout, Nav, Body, Alert, Switch, Cell, Group} from '../components'

class Demo extends React.Component {
  state = {
    open: false
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Alert"/>
        <Body slot="body">
          <Group>
            <Cell title="default">
              <Switch value={this.state.open} onChange={this.handleChange.bind(this)} />
            </Cell>
            <Cell title="js调用">
              <span onClick={this.handleClick}>点击我打开</span>
            </Cell>
          </Group>
        </Body>
        <Alert open={this.state.open} onConfirm={this.handleConfirm.bind(this)}>
          确认删除我么
        </Alert>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      open: value
    })
  }
  handleConfirm () {
    this.handleChange(false)
  }
  handleClick () {
    Alert.open({
      message: 'alert'
    })
  }
}

export default Demo;

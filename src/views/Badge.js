import React from 'react';
import { Layout, Nav, Body, Badge, Cell, Group} from '@/components'

class Demo extends React.Component {
  state = {
    count: 8
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Badge"/>
        <Body slot="body">
          <Group>
            <Cell title="红点">
              <div>新消息<Badge/></div>
            </Cell>
            <Cell title="个位数红点(点击累加)">
              <div onClick={this.handleClick.bind(this)}>新消息<Badge text={this.state.count}/></div>
            </Cell>
            <Cell title="超出最大值显示(ellipsis)红点">
              <div>新消息<Badge text={20}/></div>
            </Cell>
            <Cell title="多位数红点">
              <div>新消息<Badge text="888"/></div>
            </Cell>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleClick () {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default Demo;

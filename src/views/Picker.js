import React from 'react';
import { Layout, Nav, Body, Message, Picker, Group} from '@/components'

class Demo extends React.Component {
  state = {
    value: '010101',
    options: [{
      value: '010101',
      label: '南山区'
    },
    {
      value: '010102',
      label: '福田区'
    },
    {
      value: '010103',
      label: '罗湖区'
    },
    {
      value: '010104',
      label: '宝安区'
    },
    {
      value: '010105',
      label: '龙华区'
    },
    {
      value: '010106',
      label: '龙岗区'
    },
    {
      value: '010107',
      label: '盐田区'
    },
    {
      value: '010108',
      label: '坪山区'
    },
    {
      value: '010109',
      label: '光明区'
    }]
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Picker"/>
        <Body slot="body">
          <Message>注意：此示例要在移动设备体验哦~</Message>
          <Group title={'value：' + this.state.value}>
            <Picker placeholder="请选择" value={this.state.value} options={this.state.options} onChange={this.handleChange.bind(this)}></Picker>
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

import React from 'react';
import { Layout, Body, Nav, Textarea, Group } from '@/components'

class Demo extends React.Component {
  state = {value: ''}
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Textarea"/>
        <Body slot="body">
          <Group>
            <Textarea value={this.state.value} onChange={this.handleChange.bind(this)}  placeholder="请输入消息内容" enterNumber maxLength={100}/>
          </Group>
          <div style={{padding:'10px',color:'#999'}}>
            注：输入换行符或者更多内容我会自动”撑高“
          </div>
          <div style={{padding:'10px'}}>{this.state.value}</div>
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

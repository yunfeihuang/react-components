import React from 'react';
import { Layout, Body, Nav, Group, Checker, CheckerGroup } from '@/components'

class Demo extends React.Component {
  state = {
    checked: false,
    value: ['1', '2'],
    options: [
      {
        value: '1',
        label: '篮球'
      },
      {
        value: '2',
        label: '羽毛球'
      },
      {
        value: '3',
        label: '乒乓球',
        disabled: true
      },
      {
        value: '4',
        label: '高尔夫'
      }
    ]
  }
  render() {
    let options = this.state.options.map((item, index) => {
      return <Checker value={item.value} key={index} >{item.label}</Checker>
    })
    return (
      <Layout>
        <Nav slot="header" title="Checkbox"/>
        <Body slot="body">
          <Group title={"Checker："+this.state.checked}>
            <div style={{padding:'20px'}}>
              <Checker checked={this.state.checked} onChange={this.handleChange.bind(this)}>Checker</Checker>
            </div>
          </Group>
          <Group title={"CheckerGroup："+this.state.value}>
            <div style={{padding:'20px'}}>
              <CheckerGroup value={this.state.value} onChange={this.handleGroupChange.bind(this)}>
                {options}
              </CheckerGroup>
            </div>
          </Group>
          <Group title={"CheckerGroup最多选2个"}>
            <div style={{padding:'20px'}}>
              <CheckerGroup value={this.state.value} onChange={this.handleGroupChange.bind(this)} max={2}>
                {options}
              </CheckerGroup>
            </div>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (e) {
    this.setState({
      checked: e.target.checked
    })
  }
  handleGroupChange (value) {
    this.setState({
      value: value
    })
  }
}

export default Demo;

import React from 'react';
import { Layout, Body, Nav, Group, Radio, RadioGroup, Divider } from '../components'

class Demo extends React.Component {
  state = {
    checked: false,
    value: '1',
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
    return (
      <Layout>
        <Nav slot="header" title="Radio"/>
        <Body slot="body">
        <Group title="Radio">
          <Radio checked={this.state.value === '1'} value="1" onChange={this.handleGroupChange.bind(this)}>篮球</Radio>
          <Divider/>
          <Radio checked={this.state.value === '2'} value="2" onChange={this.handleGroupChange.bind(this)}>羽毛球</Radio>
        </Group>
          <Group title={"RadioGroup："+this.state.value}>
            <RadioGroup value={this.state.value} onChange={this.handleGroupChange.bind(this)}>
              {(() => {
                return this.state.options.map((item, index) => {
                  return <Radio value={item.value} key={index} disabled={item.disabled}>{item.label}</Radio>
                })
              })()}
            </RadioGroup>
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

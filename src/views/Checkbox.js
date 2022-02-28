import React from 'react';
import { Layout, Body, Nav, Group, Checkbox, CheckboxGroup } from '../components'

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
      return <Checkbox value={item.value} key={index} disabled={item.disabled}>{item.label}</Checkbox>
    })
    return (
      <Layout>
        <Nav slot="header" title="Checkbox"/>
        <Body slot="body">
          <Group title={"Checkbox："+this.state.checked}>
            <Checkbox style={{margin: '0 0.2rem'}} checked={this.state.checked} onChange={this.handleChange.bind(this)}>checkbox</Checkbox>
          </Group>
          <Group title={"CheckboxGroup："+this.state.value}>
            <CheckboxGroup value={this.state.value} onChange={this.handleGroupChange.bind(this)}>
              {options}
            </CheckboxGroup>
          </Group>
          <Group title={"CheckboxGroup Change Icon style And inline style"}>
            <CheckboxGroup style={{padding:'0.2rem'}} inline={true} iconStyle="checkbox" value={this.state.value} onChange={this.handleGroupChange.bind(this)}>
              {options}
            </CheckboxGroup>
          </Group>
          <Group title={"CheckboxGroup-Reverse"}>
            <CheckboxGroup value={this.state.value} onChange={this.handleGroupChange.bind(this)} direction="reverse">
              {options}
            </CheckboxGroup>
          </Group>
          <Group title={"CheckboxGroup最多选2个"}>
            <CheckboxGroup value={this.state.value} onChange={this.handleGroupChange.bind(this)} max={2}>
              {options}
            </CheckboxGroup>
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

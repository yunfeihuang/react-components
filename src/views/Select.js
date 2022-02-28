import React from 'react';
import { Layout, Body, Nav, Cell, Group, Select, Option} from '../components'

class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      value2: [],
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
          label: '乒乓球'
        },
        {
          value: '4',
          label: '高尔夫',
          disabled: true
        },
        {
          value: '5',
          label: '篮球'
        },
        {
          value: '6',
          label: '羽毛球'
        },
        {
          value: '7',
          label: '乒乓球'
        },
        {
          value: '8',
          label: '篮球'
        },
        {
          value: '9',
          label: '羽毛球'
        },
        {
          value: '10',
          label: '乒乓球'
        },
        {
          value: '11',
          label: '高尔夫'
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }
  render() {
    let Options1 = this.state.options.map((item, index) => {
      return (
        <Option value={item.value} disabled={item.disabled} key={index}>{item.label}</Option>
      )
    })
    let Options2 = this.state.options.map((item, index) => {
      return (
        <Option value={item.value} disabled={item.disabled} key={index} label={item.label}><span style={{color:'red'}}>red color</span>{item.label}</Option>
      )
    })
    let Options3 = this.state.options.map((item, index) => {
      return (
        <Option value={item.value} disabled={item.disabled} key={index}>{item.label}</Option>
      )
    })
    return (
      <Layout>
        <Nav slot="header" title="Select"/>
        <Body slot="body">
          <Group>
            <Cell title="default" value={
              <Select value={this.state.value} onChange={this.handleChange} >
                {Options1}
              </Select>
            } />
            <Cell title="下拉框option含html" value={
              <Select popupDirection="center" value={this.state.value} onChange={this.handleChange} >
                {Options2}
              </Select>
            } />
            <Cell title="多选" value={
              <Select value={this.state.value2} max={0} onChange={this.handleChange2} >
                {Options3}
              </Select>
            } />
            <Cell title="最多选两个" value={
              <Select value={this.state.value2} max={2} onChange={this.handleChange2} >
                {Options3}
              </Select>
            } />
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      value: value
    })
  }
  handleChange2 (value) {
    this.setState({
      value2: value
    })
  }
  
}

export default Demo;

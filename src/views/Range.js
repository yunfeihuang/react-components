import React from 'react';
import { Layout, Nav, Body, Range, Group} from '@/components'

class Demo extends React.Component {
  state = {
    value1: 0,
    value2: 0
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Range"/>
        <Body slot="body">
          <Group title={`default(value:${this.state.value1})`}>
            <div style={{padding:'10px'}}>
              <Range value={this.state.value1} onChange={this.handleChange.bind(this, 'value1')}/>
            </div>
          </Group>
          <Group title={`step:10(value:${this.state.value1})`}>
            <div style={{padding:'10px'}}>
              <Range unit="M" value={this.state.value1} step={10} onChange={this.handleChange.bind(this, 'value1')}/>
            </div>
          </Group>
          <Group title={`min:10,max:50(value:${this.state.value2})`}>
            <div style={{padding:'10px'}}>
              <Range value={this.state.value2} min={10} max={50} onChange={this.handleChange.bind(this, 'value2')}/>
            </div>
          </Group>
          <Group title={`disabled`}>
            <div style={{padding:'10px'}}>
              <Range value={this.state.value1} disabled/>
            </div>
          </Group>
        </Body>
      </Layout>
    );
  }
  handleChange (key, value) {
    let state = {...this.state}
    state[key] = value
    this.setState(state)
  }
}

export default Demo;

import React from 'react';
import { Nav, Layout, Group, Cell, Switch } from '@/components'

class Demo extends React.Component {
  state = {
    open: false
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Switch"/>
        <div slot="body">
          <Group>
            <Cell title={'开关：'+this.state.open} value={<Switch value={this.state.open} onChange={this.handleChange.bind(this)} />} />
          </Group>
        </div>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      open: value
    })
  }
}

export default Demo;

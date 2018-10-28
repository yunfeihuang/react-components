import React from 'react';
import { Layout, Body, Nav, Group, Cell, Switch } from '@/components'

class Demo extends React.Component {
  state = {open: false}
  render() {
    let icon = <img alt="img" src="http://vx.bittyos.com/static/images/github.png" style={{height:'20px',width:'20px',borderRadius:'50%'}}/>
    return (
      <Layout>
        <Nav slot="header" title="Cell"/>
        <Body slot="body">
          <Group title="default">
            <Cell icon={icon} title="title" value="value" arrow={true} />
          </Group>
          <Group title="no arrow">
            <Cell arrow={false} title="标题">
              <Switch value={this.state.open} onChange={this.handleChange.bind(this)}/>
            </Cell>
          </Group>
        </Body>
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

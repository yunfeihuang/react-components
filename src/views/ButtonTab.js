import React from 'react';
import { Layout, Body, Nav, ButtonTab, ButtonTabItem } from '../components'

class Demo extends React.Component {
  state = {
    active: 'recommed',
    items: [
      {name: 'recommed', label: '推荐'},
      {name: 'it', label: '科技'},
      {name: 'active', label: '活动'},
      {name: 'find', label: '发现'}
    ]
  }
  render() {
    let items = this.state.items.map((item, index) => {
      return <ButtonTabItem name={item.name} key={index}>{item.label}</ButtonTabItem>
    })
    return (
      <Layout>
        <Nav slot="header" title="ButtonTab"/>
        <Body slot="body" style={{background:'#fff', padding: '0.2rem'}}>
          <br/>
          <ButtonTab active={this.state.active} onChange={this.handleChange.bind(this)}>
            {items}
          </ButtonTab>
          <br />
          <ButtonTab style={{width:'5rem'}} size="small" active={this.state.active} onChange={this.handleChange.bind(this)}>
            {items}
          </ButtonTab>
        </Body>
        
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      active: value
    })
  }
}

export default Demo;

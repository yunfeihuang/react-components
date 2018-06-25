import React from 'react';
import { Layout, Nav, IndexList } from '@/components'

let list = []
let array = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']
array.forEach(item1 => {
  let items = array.map(item2 => {
    return {
      value: item1 + item2,
      label: `label-${item1 + item2}`
    }
  })
  list.push({
    label: item1,
    items
  })
})
class Demo extends React.Component {
  state = {
    list: list
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="IndexList"/>
        <IndexList slot="body" data={this.state.list} onClick={this.handleClick.bind(this)}/>
      </Layout>
    );
  }
  handleClick (value) {
    console.log(value)
  }
}

export default Demo;

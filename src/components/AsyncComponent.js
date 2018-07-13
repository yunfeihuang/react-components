import React from 'react'
import ReactDOM from 'react-dom'
import Toast from '@/components/toast'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
      let node = this.node = document.createElement('div')
      document.body.appendChild(node)
      ReactDOM.render(
        <Toast type="loading" open={true} duration={0} align="center">页面努力加载...</Toast>,
        node
      )
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component: component
      }, () => {
        this.node && this.node.parentNode && this.node.parentNode.removeChild(this.node)
      })
    }

    render() {
      const C = this.state.component
      
      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
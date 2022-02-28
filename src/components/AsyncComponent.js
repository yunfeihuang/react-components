import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'


export default function asyncComponent(importComponent) {
  /*
  function AsyncComponent (props) {
    const [component, setComponent] = useState(null)
    useEffect(async () => {
      const { default: component } = await importComponent()
      setComponent(component)
    }, [])
    const C = component
    return C ? <C {...this.props} /> : null
  }
  return AsyncComponent
  */
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
      /*
      this.node = document.createElement('div')
      document.body.appendChild(this.node)
      ReactDOM.render(
        <Toast type="loading" open={true} duration={0} align="center">页面努力加载...</Toast>,
        this.node
      )
      */
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component: component
      }, () => {
        /*
        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(this.node)
          this.node && this.node.parentNode && this.node.parentNode.removeChild(this.node)
          this.node = null
        }, 200)
        */
      })
    }

    render() {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }
  return AsyncComponent
}
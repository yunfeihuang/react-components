import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import rootAction from '@/store/root/action';
import Toast from '@/components/toast'

export default function asyncComponent(importComponent, mapStateToProps, mapDispatchToProps) {
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
      
      const _mapStateToProps = mapStateToProps ? mapStateToProps : (state, ownProps) => {
        return {
          state,
          ownProps
        }
      }

      const _mapDispatchToProps = mapDispatchToProps ? mapDispatchToProps : (dispatch) => {
        return {
          dispatch (action, data) {
            let lastIndex = action.lastIndexOf('/')
            let name = lastIndex ? action.substring(lastIndex + 1) : action
            let path = lastIndex ? action.substring(0, lastIndex) : ''
            if (path) {
              data.$$module = path
              import(`../store/${path}/action`).then(res => {
                if (res.default && res.default[name]) {
                  dispatch(res.default[name](data))
                }
              }).catch(() => {
                console.log(`not find store module "${name}"`)
              })
            } else {
              if (rootAction[action]) {
                dispatch(rootAction[action](data))
              } else {
                console.log(`not find store module "${action}"`)
              }
            }
          }
        }
      }
      this.setState({
        component: connect(_mapStateToProps, _mapDispatchToProps)(component)
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
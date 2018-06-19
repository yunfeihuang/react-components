import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import actions from '../store/actions';
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
      
      const mapStateToProps = (state, ownProps) => {
        return {
          state,
          ownProps
        }
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          dispatch (action, data) {
            let array = action.split('/')
            if (array.length > 1) {
              import(`../store/actions/${array[0]}`).then(res => {
                if (res.default && res.default[array[1]]) {
                  dispatch(res.default[array[1]](data))
                }
              }).catch(() => {
                console.log(`not find store module "${array[0]}"`)
              })
            } else {
              if (actions[action]) {
                dispatch(actions[action](data))
              }
            }
          }
        }
      }
      this.setState({
        component: connect(mapStateToProps, mapDispatchToProps)(component)
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
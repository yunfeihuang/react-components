import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../store/actions';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      
      const mapStateToProps = (state, ownProps) => {
        console.log(state)
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
      })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncComponent
}
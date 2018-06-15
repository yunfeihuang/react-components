import React from 'react'
import classnames from 'classnames'
import Input from '../input'
import Icon from '../icon'

export default class Password extends React.Component {
  constructor (props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.state = {
      type: this.props.type || 'password'
    }
  }
  render () {
    let {children, className, style, ...others} = this.props
    return (
      <div className={classnames(['vx-password'])} style={style}>
        <Input {...others} type={this.state.type}/>
        <button
          className="vx-password-switch"
          type="button"
          onClick={this.handleSwitch}>
          <Icon style={{display: this.state.type === 'password' ? '' : 'none'}}>&#xe602;</Icon>
          <Icon style={{display: this.state.type === 'password' ? 'none' : ''}}>&#xe63b;</Icon>
        </button>
      </div>
    )
  }
  handleSwitch () {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password'
    })
  }
}

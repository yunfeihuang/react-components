import React from 'react'
import classnames from 'classnames'
import Input from '../input'
import Password from '../password'
import Confirm from '../confirm'

class Prompt extends React.Component {
  static defaultProps = {
    inputProps: {}
  }
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.inputProps.value || ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  render () {
    let {children, inputProps, className, style, disabled, ...others} = this.props
    let _children = children
    if (!_children) {
      if (inputProps && inputProps.type === 'password') {
        _children = <Password {...inputProps} value={this.state.value} className={classnames(['vx-prompt-input',inputProps.className])} onInput={this.handleInput}/>
      } else {
        _children = <Input {...inputProps} value={this.state.value} className={classnames(['vx-prompt-input',inputProps.className])}  onInput={this.handleInput}/>
      }
    }
    return (
      <Confirm {...others} style={style} className={classnames(['vx-prompt',{'is-disabled': children ? disabled : !this.state.value}])} onConfirm={this.handleConfirm}>{_children}</Confirm>
    )
  }
  handleInput (value) {
    this.setState({value})
  }
  handleConfirm () {
    this.props.onConfirm && this.props.onConfirm(this.state.value)
  }
}

export default Prompt;

import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onInput: PropTypes.func
  } 
  constructor (props) {
    super(props)
    this.state = {
      isFocus: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  render () {
    let {children, className, style,...others} = this.props
    return (
      <label
        style={style}
        className={classnames(['vx-input-wrapper',{'vx-input-focus': this.state.isFocus}, className])}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>
        <input {...others} onChange={this.handleChange} onInput= {this.handleInput}/>
      </label>
    )
  }
  handleChange (e) {
    this.props.onChange && this.props.onChange (e.target.value)
  }
  handleInput (e) {
    this.props.onInput && this.props.onInput (e.target.value)
  }
  handleFocus () {
    this.setState({
      isFocus: true
    })
  }
  handleBlur () {
    this.setState({
      isFocus: false
    })
  }
}

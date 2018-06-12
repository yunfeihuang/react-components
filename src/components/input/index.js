import React from 'react'
import classnames from 'classnames'

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFocus: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  render () {
    let {children, className, style, ...others} = this.props
    return (
      <label
        style={style}
        className={classnames(['vx-input-wrapper',{'vx-input-focus': this.state.isFocus}, className])}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>
        <input {...others}/>
      </label>
    )
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

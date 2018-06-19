import React from 'react'
import classnames from 'classnames'

export default class Textarea extends React.Component {
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
    let {children, className, style, enterNumber, ...others} = this.props
    return (
      <label
        ref="$el"
        style={style}
        className={classnames(['vx-textarea-wrapper',{'vx-textarea-focus': this.state.isFocus}, className])}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>
        <div className="vx-textarea-shadow"></div>
        <textarea {...others} onChange={this.handleChange} onInput= {this.handleInput}/>
        {enterNumber && others.maxlength && <em className="vx-textarea-enter-number">
          {others.value.length}/{others.maxlength}
        </em>}
      </label>
    )
  }
  componentDidMount () {
    this.$$textarea = this.refs.$el.querySelector('textarea')
    this.$$shadow = this.refs.$el.querySelector('.vx-textarea-shadow')
    this.renderAutoHeight(this.$$textarea.value)
  }
  renderAutoHeight (value) {
    requestAnimationFrame(() => {
      this.$$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
      this.refs.$el.style.height = this.$$shadow.offsetHeight + 'px'
    })
  }
  handleChange (e) {
    this.props.onChange && this.props.onChange (e.target.value)
  }
  handleInput (e) {
    this.renderAutoHeight(e.target.value)
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

import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Textarea extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    enterNumber: PropTypes.bool,
  }
  defaultProps = {
    enterNumber: false
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
    let {children, className, style, enterNumber, ...others} = this.props
    return (
      <label
        ref="$el"
        style={style}
        className={classnames(['vx-textarea--wrapper',{'is-focus': this.state.isFocus,'vx-textarea--enter-number': enterNumber}, className])}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>
        <div class="vx-textarea--inner">
          <div className="vx-textarea--shadow"></div>
          <textarea {...others} onChange={this.handleChange} onInput= {this.handleInput}/>
          {enterNumber && others.maxLength && <em>
            {others.value.length}/{others.maxLength}
          </em>}
        </div>
      </label>
    )
  }
  componentDidMount () {
    this.$$textarea = this.refs.$el.querySelector('textarea')
    this.$$inner = this.refs.$el.querySelector('.vx-textarea--inner')
    this.$$shadow = this.refs.$el.querySelector('.vx-textarea--shadow')
    this.renderAutoHeight(this.$$textarea.value)
    this.$handleResize = this.handleResize.bind(this)
    window.addEventListener('resize', this.$handleResize, false)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.$handleResize)
  }
  handleResize () {
    this.renderAutoHeight(this.$$textarea.value)
  }
  renderAutoHeight (value) {
    requestAnimationFrame(() => {
      this.$$shadow.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
      this.$$inner.style.height = this.$$shadow.offsetHeight + 'px'
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

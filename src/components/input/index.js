import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {Flexbox, FlexboxItem} from '../flexbox'

export default class Input extends React.Component {
  static propTypes = {
    clear: PropTypes.bool,
    border: PropTypes.bool,
    onChange: PropTypes.func,
    onInput: PropTypes.func
  } 
  static defaultProps = {
    border: true,
    clear: true,
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
    let {children, className, style, prepend, append, clear, border, ...others} = this.props
    let getClassName  = () => {
      return classnames([
        'vx-input--wrapper',
        {
          'is-focus': this.state.isFocus,
          'is-clear': !!others.value && clear,
          'vx-input--prepend': prepend,
          'vx-input--append': append,
          'is-disabled': others.disabled,
          'is-border': border
        }, 
        className
      ])
    }
    return (
      <div
        style={style}
        className={getClassName()}
        
        >
        <Flexbox component="label" align="center"
          className={classnames(['vx-input--inner'])}
          >
            {prepend}
            <FlexboxItem>
              <input {...others} 
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange} onInput= {this.handleInput}/>
            </FlexboxItem>
            {append}
        </Flexbox>
      </div>
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

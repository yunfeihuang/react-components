import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class InputNumber extends React.Component {
  static propTypes = {
    step: PropTypes.number,
    buttonStep: PropTypes.number,
    onChange: PropTypes.func
  }
  static defaultProps = {
    step: 1,
    buttonStep: 1
  }
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeAdd = this.handleChangeAdd.bind(this, this.props.buttonStep)
    this.handleChangeReduce = this.handleChangeReduce.bind(this, -this.props.buttonStep)
  }
  render () {
    let {children, className, style, buttonStep, onChange, value, ...others} = this.props
    return (
      <div ref="$el" className={classnames(["vx-input-number", className])} style={style}>
        <button className="vx-input-number--reduce" type="button" onClick={this.handleChangeReduce}></button>
        <input
          {...others}
          type="number"
          initialvalue={this.myValue()}
          onBlur={this.handleChange}/>
        <button className="vx-input-number--add" type="button" onClick={this.handleChangeAdd}></button>
      </div>
    )
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.value !== nextProps.value) {
      let node = this.refs.$el.querySelector('input')
      node.value = nextProps.value
    }
  }
  handleChangeAdd (step) {
    this.handleChange(this.myValue() + step)
  }
  handleChangeReduce (step) {
    this.handleChange(this.myValue() + step)
  }
  handleChange (e) {
    let value = Number(e.target ? e.target.value : e)
    let node = this.refs.$el.querySelector('input')
    let {min, max} = this.props
    if (isNaN(value)) {
      node && (node.value = this.props.value)
    } else {
      if (typeof max === 'number' && value > max) {
        value = max
      }
      if (typeof min === 'number' && value < min) {
        value = min
      }
      value = Math.round(value * this.stepRate()) / this.stepRate()
      node && (node.value = value)
      console.log('value', value)
      this.props.onChange && this.props.onChange (value)
    }
  }
  myValue () {
    let {value, min, max} = this.props
    if (value < min) {
      return Math.round(min * this.stepRate()) / this.stepRate()
    }
    if (value > max) {
      return Math.round(max * this.stepRate()) / this.stepRate()
    }
    return Math.round(value * this.stepRate()) / this.stepRate()
  }
  stepRate () {
    return 1 / this.props.step
  }
}

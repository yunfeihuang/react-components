import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Range extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    disabled: false,
  }
  constructor (props) {
    super(props)
    this.handleTouchStart = this.handleTouchStart.bind(this)
  }
  render () {
    let {className, disabled, value, max, min, ...others} = this.props
    return (
      <div ref="$el" className={classnames(['vx-range-wrapper', {'is-disabled': disabled}])} {...others}>
        <div className="vx-range-mask"></div>
        <div className="vx-range-value" ></div>
        <div className="vx-range-button" onMouseDown={this.handleTouchStart} onTouchStart={this.handleTouchStart}>
          <div className="vx-range-tips">0</div>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.getRangeInitData()
    this.renderRange(this.myValue())
  }
  componentDidUpdate (prevProps) {
    if (prevProps.value !== this.props.value) {
      this.renderRange(this.myValue(this.props.value))
    }
  }
  offsetWidth () {
    return {
      width: this.props.value / this.props.max * this.props.$el.offsetWidth + 'px'
    }
  }
  myValue (value = this.props.value) {
    if (value < this.props.min) {
      return Math.round(this.props.min * this.stepRate()) / this.stepRate()
    }
    if (value > this.props.max) {
      return Math.round(this.props.max * this.stepRate()) / this.stepRate()
    }
    return Math.round(value * this.stepRate()) / this.stepRate()
  }
  range () {
    return this.props.max - this.props.min
  }
  stepRate () {
    return 1 / this.props.step
  }
  getRangeInitData () {
    this.$el = this.refs.$el
    let controlNode = this.$el.querySelector('.vx-range-button')
    let valueNode = this.$el.querySelector('.vx-range-value')
    let tipsNode = this.$el.querySelector('.vx-range-tips')
    let maskNode = this.$el.querySelector('.vx-range-mask')
    this.$$range = {
      maxLeft: maskNode.offsetWidth - controlNode.offsetWidth,
      controlNode,
      valueNode,
      tipsNode
    }
  }
  renderRange (value) {
    let left = Math.round((value - this.props.min) / this.range() * this.$$range.maxLeft) + 'px'
    this.$$range.controlNode.style.left = this.$$range.valueNode.style.width = left
    this.$$range.tipsNode.innerHTML = this.myValue()
  }
  handleChange (val) {
    this.props.onChange && this.props.onChange(val)
  }
  handleTouchStart (e) {
    e.preventDefault()
    if (!this.props.disabled) {
      let position = this.getPosition(e)
      let start = true
      let buttonLeft = this.$$range.controlNode.style.left
      let touch = Object.assign({
        left: buttonLeft ? parseFloat(buttonLeft) : 0
      }, position)
      this.$$range.tipsNode.style.display = 'block'
      let self = this
      let value = this.myValue()
      let handleTouchMove = (event) => {
        if (start) {
          let movePosition = self.getPosition(event)
          let left = movePosition.pageX - position.pageX + touch.left
          left = left < 0 ? 0 : left
          left = left > this.$$range.maxLeft ? this.$$range.maxLeft : left
          buttonLeft = left
          this.$$range.controlNode.style.left = this.$$range.valueNode.style.width = left + 'px'
          this.$$range.tipsNode.innerHTML = value = Math.round((buttonLeft / this.$$range.maxLeft * this.range() + this.props.min) * this.stepRate()) / this.stepRate()
          event.preventDefault()
        }
      }
      let handleTouchEnd = () => {
        document.removeEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove.bind(this))
        document.removeEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd.bind(this))
        start = false
        this.$$range.tipsNode.style.display = 'none'
        self.handleChange(value)
      }
      document.addEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', handleTouchMove, false)
      document.addEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', handleTouchEnd, false)
    }
  }
  getPosition (e) {
    return {
      pageX: e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
      pageY: e.changedTouches ? e.changedTouches[0].pageY : e.pageY
    }
  }
}

export default Range;

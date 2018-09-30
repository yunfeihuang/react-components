import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import RemToPx from '../remtopx'

let easeout = (A, B, rate, callback) => {
  if (A === B || typeof A !== 'number') {
    return
  }
  B = B || 0
  rate = rate || 2
  let step = () => {
    A = A + (B - A) / rate
    if (Math.abs(B - A) < 1) {
      callback(B, true)
      return
    }
    callback(A, false)
    requestAnimationFrame(step)
  }
  step()
}
  
export default class Picker extends React.Component {
  constructor (props) {
    super(props)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.scrollToActive = this.scrollToActive.bind(this)
    this.computeStyles = this.computeStyles.bind(this)
  }
  static propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    itemHeight: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onPullDown: PropTypes.func,
    onPullUp: PropTypes.func
  }
  static defaultProps = {
    options: [],
    itemHeight: 0.9
  }
  render () {
    const { className, style, placeholder, options, itemHeight, value} = this.props
    return (
      <div ref="$el" className={classnames(['vx-picker--wrapper', className])} style={style}>
        <input type="hidden" value={value} />
        <div
          className="vx-picker"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onScroll={this.scrollHandlder}
          >
          <div className="vx-picker--scroller">
            {placeholder && <RemToPx height={itemHeight} even className={classnames(['vx-picker--item','vx-picker--placeholder'])}>
              {placeholder}
            </RemToPx>}
            {options.map((item, index) => {
              return (
                <RemToPx
                  height={itemHeight}
                  even
                  className={classnames(['vx-picker--item',{'is-active' : item.value === value}])}
                  data-value={item.value}
                  data-index={index}
                  key={index}
                  >
                  {item.label}
                </RemToPx>
              )
            })}
          </div>
        </div>
        <div className="vx-picker--indicator">
          <div className="vx-picker--indicator-top"></div>
          <div className="vx-picker--indicator-bottom"></div>
        </div>
      </div>
    )
  }
  componentWillMount () {
    this.$$touch = {}
  }
  componentDidMount () {
    this.$$touch.scrollElement = this.refs.$el.querySelector('.vx-picker')
    requestAnimationFrame(this.scrollToActive)
    this.computeStyles()
    window.addEventListener('resize', this.computeStyles, false)
  }
  componentWillUnmount () {
    this.$$touch = null
    window.removeEventListener('resize', this.computeStyles)
  }
  componentWillReceiveProps (nextProps) {
    if (JSON.stringify(this.props.options) !== JSON.stringify(nextProps.options)) {
      this.refs.$el.querySelector('.vx-picker').scrollTop = 0
    }
  }
  computeStyles () {
    let fontSize = document.documentElement.style.fontSize
    if (fontSize && this.props.itemHeight) {
      fontSize = parseInt(fontSize, 10)
      let itemHeight = fontSize * this.props.itemHeight
      if (itemHeight % 2) {
        itemHeight++
      }
      let pickerNode = this.refs.$el.querySelector('.vx-picker')
      let pickerScrollerNode = this.refs.$el.querySelector('.vx-picker--scroller')
      let indicatorTopNode = this.refs.$el.querySelector('.vx-picker--indicator-top')
      let indicatorBottomNode = this.refs.$el.querySelector('.vx-picker--indicator-bottom')
      let self = this
      requestAnimationFrame(() => {
        pickerNode.style.height = itemHeight * 7 + 'px'
        pickerScrollerNode.style.padding = itemHeight * 3 + 'px 0'
        pickerScrollerNode.style.lineHeight = itemHeight + 'px'
        indicatorTopNode.style.top = itemHeight * 3 + 'px'
        indicatorBottomNode.style.top = itemHeight * 4 + 'px'
        indicatorTopNode.style.boxShadow = `0px -${itemHeight * 3}px 0px ${itemHeight * 3}px rgba(255,255,255,0.45)`
        indicatorBottomNode.style.boxShadow = `0px ${itemHeight * 3}px 0px ${itemHeight * 3}px rgba(255,255,255,0.45)`
        requestAnimationFrame(self.scrollToActive)
      })
    }
  }
  scrollToActive () {
    let self = this
    let node = this.refs.$el.querySelector('.is-active')
    let index = 0
    Array.from(this.refs.$el.querySelectorAll('.vx-picker--item')).forEach((item, i) => {
      if (item === node) {
        index = i
      }
    })
    requestAnimationFrame(() => {
      self.$$touch.scrollElement.scrollTop = node ? index * node.offsetHeight : 0
    })
  }
  handleTouchEnd () {
    this.$$touch.scrollEnd = true
    this.computedScrollTop()
  }
  handleTouchMove (e) {
    let self = this
    let pageY = e.changedTouches[0].pageY
    if (this.$$touch.pageY) {
      if (this.$$touch.scrollElement.scrollTop === 0 && pageY - this.$$touch.pageY > 0) {
        this.$$pullTimer && clearTimeout(this.$$pullTimer)
        this.$$pullTimer = setTimeout(() => {
          self.props.onPullDown && self.props.onPullDown()
        }, 500)
        e.preventDefault()
        e.stopPropagation()
      } else if (Math.round(this.$$touch.scrollElement.scrollTop) === this.$$touch.maxScrollTop && pageY - this.$$touch.pageY < 0) {
        this.$$pullTimer && clearTimeout(this.$$pullTimer)
        this.$$pullTimer = setTimeout(() => {
          self.props.onPullUp && self.props.onPullUp()
        }, 500)
        e.preventDefault()
        e.stopPropagation()
      }
    }
    this.$$touch.pageY = pageY
  }
  handleTouchStart (e) {
    this.$$touch.scrollEnd = false
    this.$$touch.maxScrollTop = this.$$touch.scrollElement.scrollHeight - this.$$touch.scrollElement.offsetHeight
    this.$$touch.pageY = e.changedTouches[0].pageY
    this.$$timer && clearTimeout(this.$$timer)
    this.$$pullTimer && clearTimeout(this.$$pullTimer)
    let node = this.$$touch.scrollElement.querySelector('.vx-picker--item')
    if (node) {
      this.$$touch.offsetHeight = node.offsetHeight
    }
  }
  handleScroll () {
    if (this.$$touch && this.$$touch.scrollEnd) {
      this.computedScrollTop()
    }
  }
  computedScrollTop () {
    let self = this
    this.$$timer && clearTimeout(this.$$timer)
    this.$$timer = setTimeout(() => {
      self.$$touch.scrollEnd = false
      let node = self.refs.$el.querySelector('.vx-picker')
      let _scrollTop = node.scrollTop
      let index = Math.round(_scrollTop / self.$$touch.offsetHeight)
      let scrollTop = index * self.$$touch.offsetHeight
      requestAnimationFrame(() => {
        if (_scrollTop !== scrollTop) {
          easeout(_scrollTop, scrollTop, 4, (value) => {
            node.scrollTop = value
          })
        }
        let active = self.refs.$el.querySelectorAll('.vx-picker--item')[index]
        if (active) {
          let value = active.dataset.value
          value !== self.props.value && self.props.onChange && self.props.onChange(value)
        }
      })
    }, 800)
  }
}

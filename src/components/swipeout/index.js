import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

let swipeoutVue = null
export default class Swipeout extends React.Component{
  static propTypes = {
    open: PropTypes.bool,
    divider: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
  }
  static defaultProps = {
    open: false,
    divider: true
  }
  constructor (props) {
    super(props)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleAction = this.handleAction.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
  }
  render () {
    const { className, children, action, divider, onClose, onOpen, ...others } = this.props
    return (
      <div ref="$el" className={classnames(['vx-swipeout', {'is-divider': divider}, className])}
        {...others}
        onTouchStart={this.handleTouchStart}
        onMouseDown={this.handleTouchStart}>
        <div className="vx-swipeout--inner">
          <div className="vx-swipeout--content">
            {children}
          </div>
          <div className="vx-swipeout--action" onClick={this.handleAction}>
            {action}
          </div>
        </div>
      </div>
    )
  }
  init () {
    this.$el = this.refs.$el
    this.$$touch = {}
    let node = this.$el.querySelector('.vx-swipeout--action')
    this.$$touch.maxTranslateX = node.offsetWidth
    this.$$touch.el = this.$el.querySelector('.vx-swipeout--inner')
    requestAnimationFrame(() => {
      node.style.height = node.parentNode.offsetHeight + 'px'
      this.props.open && this.setTranslateX(-this.$$touch.maxTranslateX, null, false)
    })
  }
  componentDidMount () {
    this.init()
    this.$init = this.init.bind(this)
    window.addEventListener('resize', this.$init, false)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setTranslateX(this.props.open ? -this.$$touch.maxTranslateX : 0)
    }
  }
  componentWillUnmount () {
    if (swipeoutVue === this) {
      swipeoutVue = null
    }
    this.$$touch = null
    window.removeEventListener('resize', this.$init)
  }
  setTranslateX (x, el, transition = true) {
    el = el || this.$$touch.el
    swipeoutVue = x < 0 ? this : null
    el.style.webkitTransition = el.style.transition = transition ? '' : 'none'
    el.style.webkitTransform = el.style.transform = 'translate3d(' + x + 'px, 0, 0)'
  }
  handleTouchStart (e) {
    if (!this.disabled) {
      swipeoutVue && swipeoutVue !== this && swipeoutVue.handleAction()
      let currentTranslateX = 0
      if (this.$$touch.el) {
        let transform = this.$$touch.el.style.transform || this.$$touch.el.style.webkitTransform
        if (transform) {
          transform = transform.replace('translate3d', '')
          currentTranslateX = -parseInt(transform.match(/(\d+)/g)[0])
        }
      }
      Object.assign(this.$$touch, this.getPosition(e), {
        start: true,
        currentTranslateX
      })
      document.addEventListener('touchmove', this.handleTouchMove, false)
      document.addEventListener('touchend', this.handleTouchEnd, false)
      document.addEventListener('mousemove', this.handleTouchMove, false)
      document.addEventListener('mouseup', this.handleTouchEnd, false)
    }
  }
  handleTouchMove (e) {
    let {pageY, pageX} = this.getPosition(e)
    if (this.$$touch.start && Math.abs(pageY - this.$$touch.pageY) < Math.abs(pageX - this.$$touch.pageX)) {
      this.$$touch.diffX = pageX - this.$$touch.pageX
      this.$$touch.translateX = this.$$touch.diffX + this.$$touch.currentTranslateX
      this.$$touch.translateX = this.$$touch.translateX > 0 ? 0 : this.$$touch.translateX
      if (Math.abs(this.$$touch.translateX) > this.$$touch.maxTranslateX) {
        this.$$touch.translateX = this.$$touch.translateX > 0 ? this.$$touch.maxTranslateX : -this.$$touch.maxTranslateX
      }
      this.setTranslateX(this.$$touch.translateX, this.$$touch.el, false)
      e.stopPropagation()
      e.preventDefault()
    }
  }
  handleTouchEnd (e) {
    if (this.$$touch.start) {
      this.$$touch.start = false
      if (this.$$touch.diffX === 0) {
        this.$emit('click', this.$el)
      }
      if (Math.abs(this.$$touch.diffX) > 60) {
        this.$$touch.translateX = this.$$touch.diffX < 0 ? -this.$$touch.maxTranslateX : 0
      } else {
        this.$$touch.translateX = this.$$touch.currentTranslateX
      }
      requestAnimationFrame(() => {
        this.setTranslateX(this.$$touch.translateX)
      })
      if (this.$$touch.currentTranslateX !== this.$$touch.translateX) {
        if (this.$$touch.translateX === 0) {
          this.props.onClose && this.props.onClose()
        } else {
          this.props.onOpen && this.props.onOpen()
        }
      }
      this.$$touch.diffX = 0
      document.removeEventListener('touchmove', this.handleTouchMove)
      document.removeEventListener('touchend', this.handleTouchEnd)
      document.removeEventListener('mousemove', this.handleTouchMove)
      document.removeEventListener('mouseup', this.handleTouchEnd)
    }
  }
  handleAction () {
    requestAnimationFrame(() => {
      this.setTranslateX(0, 0)
    })
    this.props.onClose && this.props.onClose()
  }
  getPosition (e) {
    return {
      pageX: e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
      pageY: e.changedTouches ? e.changedTouches[0].pageY : e.pageY
    }
  }
}

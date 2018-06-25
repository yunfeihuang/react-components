import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Sticky extends React.Component{
  static propTypes = {
    fixedTop: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  render () {
    const { className, children, ...others } = this.props
    return (
      <div ref="$el" className={classnames(['vx-sticky-box', className])} {...others}>
        <div className="vx-sticky-inner">
          {children}
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.$el = this.refs.$el
    this.$$scrollNode = this.getScrollNode(this.$el.offsetParent)
    if (this.$$scrollNode) {
      this.$$childNode = this.$el.querySelector('.vx-sticky-inner')
      this.$$scrollNode.addEventListener('touchstart', this.handleTouchStart, false)
      this.$$scrollNode.addEventListener('scroll', this.handleScroll, false)
    }
  }
  componentWillUnmount () {
    this.$$scrollNode.removeEventListener('scroll', this.handleScroll)
    this.$$scrollNode.removeEventListener('touchstart', this.handleTouchStart)
  }
  handleTouchStart () {
    this.$el.style.height = this.$$childNode.offsetHeight + 'px'
    this.$myData = {
      offsetTop: this.$el.offsetTop,
      fixedTop: this.props.fixedTop || this.$$scrollNode.offsetTop + 'px'
    }
  }
  handleScroll (e) {
    if (e.touchstart === undefined) {
      this.handleTouchStart()
    }
    if (e.target.scrollTop > this.$myData.offsetTop) {
      this.$el.classList.add('vx-sticky-fixed')
      if (this.$$childNode.style.top !== this.$myData.fixedTop) {
        this.$$childNode.style.top = this.$myData.fixedTop
      }
    } else {
      this.$el.classList.remove('vx-sticky-fixed')
      this.$$childNode.style.top = ''
    }
  }
  getScrollNode (node) {
    let n = node
    let closest = () => {
      let styleObject = window.getComputedStyle(n)
      if (!(['scroll', 'auto'].indexOf(styleObject['overflow']) > -1 || ['scroll', 'auto'].indexOf(styleObject['overflow-y']) > -1)) {
        n = n.offsetParent
        if (n === document.body) {
          n = document.body
        } else {
          closest()
        }
      }
    }
    document.body !== n && closest()
    return n
  }
}

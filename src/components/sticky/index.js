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
    const { className, children, style, ...others } = this.props
    return (
      <div ref="$el" className={classnames(['vx-sticky--box', className])} style={Object.assign({top: '0px'}, style)} {...others}>
        <div className="vx-sticky--inner">
          {children}
        </div>
      </div>
    )
  }
  supportSticky() {
    let position = window.getComputedStyle(this.$el)['position']
    return position.indexOf('sticky') > -1
  }
  componentDidMount () {
    this.$el = this.refs.$el
    if (!this.supportSticky()) {
      this.$$scrollNode = this.getScrollNode(this.$el.offsetParent)
      if (this.$$scrollNode) {
        this.$$childNode = this.$el.querySelector('.vx-sticky--inner')
        this.$$scrollNode.addEventListener('touchstart', this.handleTouchStart, false)
        this.$$scrollNode.addEventListener('scroll', this.handleScroll, false)
        this.$handleResize = this.handleResize.bind(this)
        window.addEventListener('resize', this.$handleResize, false)
      }
    }
  }
  componentWillUnmount () {
    if (!this.supportSticky()) {
      this.$$scrollNode.removeEventListener('scroll', this.handleScroll)
      this.$$scrollNode.removeEventListener('touchstart', this.handleTouchStart)
      window.removeEventListener('resize', this.$handleResize)
    }
  }
  handleResize () {
    this.handleTouchStart()
    this.handleScroll()
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
    if (this.$$scrollNode.scrollTop > this.$myData.offsetTop) {
      this.$el.classList.add('is-fixed')
      if (this.$$childNode.style.top !== this.$myData.fixedTop) {
        this.$$childNode.style.top = this.$myData.fixedTop
      }
    } else {
      this.$el.classList.remove('is-fixed')
      this.$$childNode.style.top = ''
    }
  }
  getScrollNode (node) {
    let n = node
    let closest = () => {
      let styleObject = window.getComputedStyle(n)
      if (!(['scroll', 'auto'].indexOf(styleObject['overflow']) > -1 || ['scroll', 'auto'].indexOf(styleObject['overflow-y']) > -1) || styleObject['-webkit-overflow-scrolling'] === 'touch' || styleObject['overflow-scrolling'] === 'touch') {
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

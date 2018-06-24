import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Spinner from '../spinner'

export default class Img extends React.Component{
  static propTypes = {
    lazyload: PropTypes.bool,
    loading: PropTypes.bool,
    src: PropTypes.string,
  }
  static defaultProps = {
    lazyload: true,
    loading: false
  }
  constructor (props) {
    super(props)
    this.handleError = this.handleError.bind(this)
    this.handleLoad = this.handleLoad.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  render () {
    const { className, loading, lazyload, src, children, placeholder,...others } = this.props
    return (
      <div ref="$el" className={classnames(['vx-img-wrapper',{'vx-img-placeholder': !loading}, className])}>
        <img className={classnames(['vx-img', {'vx-img-lazyload': lazyload}])}
          {...others}
          onError={this.handleError}
          onLoad={this.handleLoad}
        />
        {loading ? <Spinner className="vx-img-spinner"/> : placeholder}
      </div>
    )
  }
  componentDidMount () {
    this.$el = this.refs.$el
    this.$$scrollNode = this.getScrollNode(this.$el.offsetParent)
    if (!this.$$scrollNode.lazyloadImages) {
      this.$$scrollNode.lazyloadImages = []
      this.$$scrollNode.scrollTimer = null
      this.$$scrollNode.onscroll = (e) => {
        e.target.scrollTimer && clearTimeout(e.target.scrollTimer)
        e.target.scrollTimer = setTimeout(() => {
          e.target.lazyloadImages = e.target.lazyloadImages.filter((item, index) => {
            if (item.loaded === false && item.img.inViewPort()) {
              item.img.setSource()
              return false
            } else {
              return true
            }
          })
        }, 500)
      }
    }
    if (this.props.lazyload) {
      if (this.inViewPort()) {
        this.setSource()
      } else {
        this.$$scrollNode.lazyloadImages.push({
          img: this,
          loaded: false
        })
      }
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
    inViewPort () {
      if (this.$el.offsetWidth === 0 && this.$el.offsetHeight === 0) {
        return false
      }
      let rect = this.$el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.left < window.innerWidth
    }
    setSource () {
      if (this.props.src) {
        let image = new Image()
        image.onload = (e) => {
          let icon = this.$el.querySelector('.vx-img-icon') || this.$el.querySelector('.vx-img-spinner')
          let img = this.$el.querySelector('img')
          requestAnimationFrame(() => {
            icon && (icon.style.display = 'none')
            img.src = this.props.src
            img.style.opacity = 1
            this.$el.classList.remove('vx-img-placeholder')
          })
        }
        image.src = this.props.src
      }
      this.props.srcset && (this.$el.srcset = this.props.srcset)
    }
    handleScroll (e) {
      if (this.inViewPort()) {
        e.currentTarget && e.currentTarget.removeEventListener('scroll', this.handleScroll)
        this.setSource()
      }
    }
    handleError (e) {
      this.props.onError && this.props.onError(e)
    }
    handleLoad (e) {
      this.props.onLoad && this.props.onLoad(e)
    }
}

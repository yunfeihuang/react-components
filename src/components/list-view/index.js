import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Spinner from '../spinner'

export default class Img extends React.Component{
  static propTypes = {
    loadingText: PropTypes.string,
    refreshText: PropTypes.string,
    endText: PropTypes.string,
    pullDownText: PropTypes.string,
    end: PropTypes.bool,
    loading: PropTypes.bool,
    onPullDown: PropTypes.func,
    onPullUp: PropTypes.func
  }
  static defaultProps = {
    loadingText: '数据加载...',
    refreshText: '释放刷新',
    endText: '没有更多',
    pullDownText: '下拉刷新',
    end: false,
    loading: false
  }
  constructor (props) {
    super(props)
    this.handlePulldown = this.handlePulldown.bind(this)
    this.handlePullup = this.handlePullup.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
  }
  render () {
    const { className, children, loadingText, pullDownText, refreshText, end, endText, loading, onPullDown, onPullUp, ...others } = this.props
    return (
      <div ref="$el" className={classnames(['vx-list-view', className])} {...others}>
        <div className="vx-list-view-inner">
          <div className="vx-list-view-refresh">
            <i className="vx-list-view-icon"></i>
            <Spinner className="vx-list-view-spinner"/>
            <span data-loading={loadingText} data-pulldown={pullDownText} data-refresh={refreshText}></span>
          </div>
          {children}
          {!end ? <div className="vx-list-view-loading">
            {loading && <Spinner className="vx-list-view-spinner"/>}
            {loadingText}
          </div>
          :<div className="vx-list-view-loading">{endText}</div>}
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.$el = this.refs.$el
    let timer = null
    this.props.onPullUp && this.$el.addEventListener('scroll', (e) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        !this.loading && !this.end && this.handleScroll(e)
      }, 200)
    })
    if (this.props.onPullDown) {
      if (document.body.ontouchstart !== undefined) {
        this.$el.addEventListener('touchstart', this.handleTouchStart)
        this.$el.addEventListener('touchmove', this.handleTouchMove)
        this.$el.addEventListener('touchend', this.handleTouchEnd)
      } else {
        this.$el.addEventListener('mousedown', this.handleTouchStart)
        this.$el.addEventListener('mousemove', this.handleTouchMove)
        this.$el.addEventListener('mouseup', this.handleTouchEnd)
      }
    }
    this.$$height = this.$el.offsetHeight
    this.$$touch = {
      inner: this.$el.querySelector('.vx-list-view-inner')
    }
  }
  componentDidUpdate (prevProps) {
    if (this.props.loading !== prevProps.loading && this.props.loading === false) {
      this.stopLoading()
    }
  }
  componentWillUnmount () {
    this.$$touch = null
  }
  handlePulldown () {
    this.props.onPullDown && this.props.onPullDown()
  }
  handlePullup () {
    this.props.onPullUp && this.props.onPullUp()
  }
  handleScroll (e) {
    if (this.$el.scrollHeight - this.$$height - this.$el.scrollTop <= 1) {
      this.props.onPullUp && this.props.onPullUp(e)
    }
  }
  getPosition (e) {
    if (document.body.ontouchstart !== undefined) {
      return {
        pageY: e.changedTouches[0].pageY,
        pageX: e.changedTouches[0].pageX
      }
    } else {
      return {
        pageY: e.pageY,
        pageX: e.pageX
      }
    }
  }
  handleTouchStart (e) {
    if (!this.loading) {
      if (!this.$$touch.pageY && this.$el.scrollTop === 0) {
        let {pageX, pageY} = this.getPosition(e)
        this.$$touch.pageY = pageY
        this.$$touch.pageX = pageX
        this.$$touch.markHeight = this.$el.querySelector('.vx-list-view-refresh').offsetHeight
      }
    }
  }
  handleTouchMove (e) {
    let {pageY, pageX} = this.getPosition(e)
    if (this.$$touch.pageY && this.$$touch.pageY < pageY && Math.abs(pageY - this.$$touch.pageY) > Math.abs(pageX - this.$$touch.pageX)) {
      e.preventDefault()
      e.stopPropagation()
      let top = pageY - this.$$touch.pageY
      let markHeight = this.$$touch.markHeight
      top = top > markHeight * 2 ? markHeight * 2 : top
      let cssText = '-webkit-will-change:transform;will-change:transform;-webkit-transform:translate3d(0,' + top + 'px,0);transform:translate3d(0,' + top + 'px,0);'
      this.$$touch.inner.style.cssText = cssText
      if (this.$$touch.pageY && pageY - this.$$touch.pageY >  (markHeight + 20)) {
        this.$$touch.inner.classList.add('active')
      } else {
        this.$$touch.inner.classList.remove('active')
      }
    }
    if (!this.$$touch.pageY && this.scrollTop <= 0) {
      this.$$touch.pageY = pageY
    } else if (this.scrollTop > 0) {
      this.$$touch.pageY = 0
    }
  }
  handleTouchEnd (e) {
    let {pageY} = this.getPosition(e)
    if (this.$$touch.pageY && this.$$touch.inner && this.$$touch.pageY < pageY) {
      let markHeight = this.$$touch.markHeight
      if (pageY - this.$$touch.pageY > (markHeight + 20)) {
        setTimeout(() => {
          let cssText = `-webkit-transform:translate3d(0,${markHeight}px,0);transform:translate3d(0,${markHeight}px,0);-webkit-transition:transform 0.5s ease 0s;transition:transform 0.5s ease 0s;`
          this.$$touch.inner.style.cssText = cssText
          setTimeout(() => {
            this.$$touch.inner.classList.remove('active')
            this.$$touch.inner.classList.add('loading')
            this.props.onPullDown && this.props.onPullDown (e)
          }, 500)
        }, 600)
      } else {
        let cssText = '-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
        this.$$touch.inner.style.cssText = cssText
        setTimeout(() => {
          this.$$touch.inner.classList.remove('active')
          this.$$touch.inner.style.cssText = ''
        }, 500)
      }
      if (this.$$touch.pageY !== pageY) {
        e.stopPropagation()
        e.preventDefault()
      }
    }
    this.$$touch.pageY = 0
  }
  stopLoading () {
    if (this.$$touch && this.$$touch.inner && this.$$touch.inner.className.indexOf('loading') > -1) {
      let cssText = '-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
      this.$$touch.inner.style.cssText = cssText
      this.$$touch.inner.classList.remove('loading')
    }
  }
}

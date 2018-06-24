import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Preview extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    index: PropTypes.number,
    options: PropTypes.object,
    onClose: PropTypes.func
  }
  static defaultProps = {
    index: 0
  }
  render () {
    let {children, className,...others} = this.props
    return (
      <div ref="$el" className={classnames(['vx-photoswiper',className])} {...others} tabIndex={-1} role="dialog" aria-hidden={true}>
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>
              <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button className="pswp__button pswp__button--share" title="Share"></button>
              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>
            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  open (index) {
    let self = this
    this.$el = this.refs.$el
    require.ensure([], (r) => {
      require('photoswipe/dist/photoswipe.css')
      require('photoswipe/dist/default-skin/default-skin.css')
      let PhotoSwipe = require('photoswipe/dist/photoswipe.min.js')
      let UI = require('photoswipe/dist/photoswipe-ui-default')
      let options = Object.assign({
        history: true,
        shareEl: false,
        tapToClose: true,
        fullscreenEl: false,
        zoomEl: true,
        index: index
      }, this.options)
      this.$el.style.display = 'block'
      this.$$photoswipe = new PhotoSwipe(this.$el, UI, this.props.list, options)
      this.$$photoswipe.init()
      this.$$photoswipe.listen('close', () => {
        self.props.onClose && self.props.onClose()
      })
    })
  }
  close () {
    this.$$photoswipe.close()
  }
}

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Swiper extends React.Component {
  static propTypes = {
    active: PropTypes.number,
    options: PropTypes.object,
    pagination: PropTypes.bool,
    prev: PropTypes.bool,
    next: PropTypes.bool,
    scrollbar: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    active: 0,
    pagination: true
  }
  render () {
    let {children, className, onChange, pagination, prev, next, scrollbar, ...others} = this.props
    return (
      <div ref="$el" className={classnames(['vx-swiper', 'swiper-container', className])} {...others}>
        <div className="swiper-wrapper" >
          {children}
        </div>
        {pagination && <div className="swiper-pagination"></div>}
        {prev && <div className="swiper-button-prev"></div>}
        {next && <div className="swiper-button-next"></div>}
        {scrollbar && <div className="swiper-scrollbar"></div>}
      </div>
    );
  }
  componentDidMount () {
    let {active, pagination, prev, next, scrollbar, onChange} = this.props
    require.ensure([], (r) => {
      let Swiper = require('swiper/dist/js/swiper.min.js')
      require('swiper/dist/css/swiper.min.css')
      let options = Object.assign({
        initialSlide: active,
        onSlideChangeStart: (swiper) => {
          onChange && onChange(swiper.activeIndex)
        }
      }, this.props.options)
      if (pagination) {
        options.pagination = '.swiper-pagination'
      }
      if (prev) {
        options.prev = '.swiper-button-prev'
      }
      if (next) {
        options.nextButton = '.swiper-button-prev'
      }
      if (scrollbar) {
        options.scrollbar = '.swiper-scrollbar'
      }
      this.$$swiper = new Swiper(this.refs.$el, options)
    })
  }
}

export default Swiper;

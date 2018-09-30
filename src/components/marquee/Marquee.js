import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Marquee extends React.Component {
  static propTypes = {
    active: PropTypes.number,
    options: PropTypes.object,
    direction: PropTypes.string,
    autoplay: PropTypes.number,
    effect: PropTypes.string,
    loop: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    active: 0,
    autoplay: 2000,
    direction: 'vertical',
    effect: 'slide',
    loop: true
  }
  render () {
    let {children, className, ...others} = this.props
    return (
      <div ref="$el" className={classnames(['vx-marquee', 'swiper-container', className])} {...others}>
        <div className="swiper-wrapper" >
          {children}
        </div>
      </div>
    );
  }
  componentDidMount () {
    let {active, direction, autoplay, loop, onChange} = this.props
    require.ensure([], (r) => {
      let Swiper = require('swiper/dist/js/swiper.min.js')
      require('swiper/dist/css/swiper.min.css')
      let options = Object.assign({
        initialSlide: active,
        direction: direction,
        autoplay: autoplay,
        loop: loop,
        onSlideChangeStart: (swiper) => {
          onChange && onChange(swiper.activeIndex)
        }
      }, this.props.options)
      this.$$swiper = new Swiper(this.refs.$el, options)
    })
  }
}

export default Marquee;

import React from 'react';
import classnames from 'classnames';

const SwiperItem = (props) => {
  let {children, className, ...others} = props
  return (
    <div className={classnames(['vx-swiper--item', 'swiper-slide', className])} {...others}>
      {children}
    </div>
  );
}

export default SwiperItem;

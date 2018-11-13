import React from 'react';
import classnames from 'classnames';

const MarqueeItem = props => {
  let {children, className, ...others} = props
  return (
    <div className={classnames(['vx-marquee-item', 'swiper-slide', className])} {...others}>
      {children}
    </div>
  );
}

export default MarqueeItem;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Ripple from '../ripple'

let TabbarItem = (props) => {
  let {children, className, activeClass, active, name, ripple, ...others} = props
  let array = ['vx-tabbar-item', 'vx-flexbox-item']
  if (active === name) {
    array.push('is-active')
    activeClass && array.push(activeClass)
  }
  array.push(className)
  if (ripple) {
    return (
      <Ripple className={classnames(array)} position="center" {...others}>
        {children}
      </Ripple>
    )
  } else {
    return (
      <div className={classnames(array)} {...others}>
        {children}
      </div>
    );
  }
}
TabbarItem.propsTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TabbarItem;

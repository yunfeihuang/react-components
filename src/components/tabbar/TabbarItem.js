import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Ripple from '../ripple'

const TabbarItem = props => {
  let {children, className, active, name, ripple, ...others} = props
  let cls = classnames(['vx-tabbar--item', 'vx-flexbox--item', {'is-active': active === name}, className])
  if (ripple) {
    return (
      <Ripple className={cls} position="center" {...others}>
        {children}
      </Ripple>
    )
  } else {
    return (
      <div className={cls} {...others}>
        {children}
      </div>
    );
  }
}
TabbarItem.propsTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TabbarItem;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SidebarItem = props => {
  let {children, className, active, name, ripple, ...others} = props
  let cls = classnames(['vx-sidebar--item', {'is-active': active === name}])
  return (
    <div className={cls} {...others}>
      {children}
    </div>
  );
}

SidebarItem.propsTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default SidebarItem;

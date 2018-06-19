import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
let TabItem = (props) => {
  let {children, className, underlineWidth, activeClass, active, name, ...others} = props
  let array = ['vx-tab-item', 'vx-flexbox-item']
  if (active === name) {
    array.push('is-active')
    activeClass && array.push(activeClass)
  }
  array.push(className)
  return (
    <div className={classnames(array)} {...others}>
      {underlineWidth && <span className="vx-tab-item-text">
        {children}
      </span>}
      {!underlineWidth && children}
    </div>
  );
}
TabItem.propsTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TabItem;

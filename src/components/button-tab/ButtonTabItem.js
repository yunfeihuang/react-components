import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

let ButtonTabItem = (props) => {
  let {children, className, active, name, ...others} = props
  let cls = classnames(['vx-button-tab-item', 'vx-flexbox-item', {'is-active': active === name}])
  return (
    <div className={cls} {...others}>
      {children}
    </div>
  );
}

ButtonTabItem.propsTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ButtonTabItem;

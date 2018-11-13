import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const TabItem = props => {
  let {children, className, underlineWidth, active, name, ...others} = props
  return (
    <div className={classnames(['vx-tab--item', 'vx-flexbox--item', {'is-active': active === name}, className])} {...others}>
      {underlineWidth && <span className="vx-tab--item-text">
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

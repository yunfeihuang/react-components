import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
let TabItem = (props) => {
  let {children, className, underlineWidth, active, name, ...others} = props
  return (
    <div className={classnames(['vx-tab--item', 'vx-flexbox--item', {'is-active': active === name}])} {...others}>
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

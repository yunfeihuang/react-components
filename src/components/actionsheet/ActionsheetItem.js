import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ActionsheetItem = (props) => {
  let {children, className, ...others} = props
  return (
    <div className={classnames(["vx-actionsheet--item", className])} {...others}>
      {children}
    </div>
  );
}
ActionsheetItem.propsTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default ActionsheetItem;

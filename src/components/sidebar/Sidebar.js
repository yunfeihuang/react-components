import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Sidebar = props => {
  let {children, className, active, ripple, onChange, ...others} = props
  let handleClick = value => {
    value !== active && onChange && onChange(value)
  }
  let cloneChildren = React.Children.map(children, item => {
    if (item) {
      return React.cloneElement(item, {
        active,
        ripple,
        onClick: handleClick.bind(this, item.props.name)
      })
    }
    return item
  })
  return (
    <div className={classnames(['vx-sidebar', className])} {...others}>
      {cloneChildren}
    </div>
  );
}
Sidebar.propTypes = {
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ripple: PropTypes.bool,
  onChange: PropTypes.func
}
Sidebar.defaultProps = {
  ripple: false
}

export default Sidebar;

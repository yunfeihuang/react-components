import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ButtonTab = props => {
  let {children, className, active, size, onChange, ...others} = props
  let handleClick = value => {
    value !== active && onChange && onChange(value)
  }
  let cloneChildren = React.Children.map(children, item => {
    if (item) {
      return React.cloneElement(item, {
        active,
        onClick: handleClick.bind(this, item.props.name)
      })
    }
    return item
  })
  return (
    <div className={classnames(['vx-flexbox', 'vx-button-tab', `vx-button-tab--size-${size}`, className])} {...others}>
      {cloneChildren}
    </div>
  );
}
ButtonTab.propTypes = {
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  onChange: PropTypes.func
}
ButtonTab.defaultProps = {
  size: 'default'
}

export default ButtonTab;

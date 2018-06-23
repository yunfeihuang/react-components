import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  static propTypes = {
    active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ripple: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    ripple: false
  }
  render () {
    let {children, className, active, ripple, ...others} = this.props
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          active,
          ripple,
          onClick: this.handleClick.bind(this, item.props.name)
        })
      }
      return item
    })
    return (
      <div className={classnames(['vx-sidebar',className])} {...others}>
        {cloneChildren}
      </div>
    );
  }
  handleClick (value) {
    this.props.onChange && this.props.onChange(value)
  }
}

export default Sidebar;

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Tabbar extends React.Component {
  static propTypes = {
    active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    activeClass: PropTypes.string,
    ripple: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    ripple: false
  }
  render () {
    let {children, className, active, activeClass, ripple, ...others} = this.props
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          activeClass,
          active,
          ripple,
          onClick: this.handleClick.bind(this, item.props.name)
        })
      }
      return item
    })
    return (
      <div className={classnames(['vx-flexbox', 'vx-tabbar'])} {...others}>
        {cloneChildren}
      </div>
    );
  }
  handleClick (value) {
    this.props.onChange && this.props.onChange(value)
  }
}

export default Tabbar;

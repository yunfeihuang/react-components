import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class ButtonTab extends React.Component {
  static propTypes = {
    active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    size: 'default'
  }
  render () {
    let {children, className, active, size, ...others} = this.props
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          active,
          onClick: this.handleClick.bind(this, item.props.name)
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
  handleClick (value) {
    this.props.onChange && this.props.onChange(value)
  }
}

export default ButtonTab;

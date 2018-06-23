import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class ButtonTab extends React.Component {
  static propTypes = {
    active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
  }
  render () {
    let {children, className, active, ...others} = this.props
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
      <div className={classnames(['vx-flexbox', 'vx-button-tab', className])} {...others}>
        {cloneChildren}
      </div>
    );
  }
  handleClick (value) {
    this.props.onChange && this.props.onChange(value)
  }
}

export default ButtonTab;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ActionsheetItem extends Component {
  static propsTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }
  render() {
    let {children, className, onClick, ...others} = this.props
    return (
      <div className={classnames(["vx-actionsheet-item", className])} onClick={this.handleClick.bind(this)} {...others}>
        {children}
      </div>
    );
  }

  handleClick () {
    this.props.onClick(this.props.value)
  }
}

export default ActionsheetItem;

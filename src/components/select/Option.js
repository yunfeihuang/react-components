import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  static propsTypes = {
    value: PropTypes.String,
    disabled: PropTypes.bool,
    label: PropTypes.String
  }
  static defaultProps = {
    disabled: false
  }
  render() {
    return null
  }
}

export default Option;

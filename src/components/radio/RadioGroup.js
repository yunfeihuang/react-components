import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CheckboxGroup extends React.Component {
  static propsTypes = {
    divider: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    divider: true
  }
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    let {children, className, style, divider, onChange, ...others} = this.props
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          $parent: {
            ...others,
            onChange: this.handleChange
          }
        })
      }
      return item
    })
    return (
      <div className={classnames(["vx-radio-group", {'vx-radio-group-divider': divider}, className])} {...others}>
        {cloneChildren}
      </div>
    );
  }
  handleChange (value) {
    value !== this.props.value && this.props.onChange && this.props.onChange(value)
  }
}

export default CheckboxGroup;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class CheckerGroup extends React.Component {
  static propsTypes = {
    value: PropTypes.array,
    max: PropTypes.number
  }
  static defaultProps = {
    value: [],
    max: 0,
  }
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    let {children, className, onChange, disabled, style, ...others} = this.props
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
      <div className={classnames(["vx-checker-group", className])} style={style} disabled={disabled} {...others}>
        {cloneChildren}
      </div>
    );
  }
  handleChange (e) {
    let value = null
    if (this.props.max === 1) {
      value = [e.target.value]
    } else {
      if (e.target.checked && this.props.max !== 0 && this.props.max === this.props.value.length) {
        console.log('max:', this.props.max)
      } else {
        value = [...this.props.value]
        if (e.target.checked) {
          value.indexOf(e.target.value) === -1 && value.push(e.target.value)
        } else {
          value.splice(value.indexOf(e.target.value), 1)
        }
      }
    }
    value && this.props.onChange && this.props.onChange(value)
  }
}

export default CheckerGroup;

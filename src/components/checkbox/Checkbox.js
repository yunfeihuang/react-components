import React from 'react';
import classnames from 'classnames';

class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    let {children, className, style, $parent, ...others} = this.props
    let type = $parent && $parent.max === 1 ? 'radio' : 'checkbox'
    let checked = others.checked
    if ($parent) {
      if ($parent.value instanceof Array) {
        checked = $parent.value.indexOf(others.value) > -1
      } else {
        checked = $parent.value === others.value
      }
    }
    return (
      <label
        style={style}
        disabled={others.disabled}
        className={classnames(['vx-checkbox', {'vx-checkbox-reverse': $parent && $parent.direction === 'reverse', 'is-active': others.checked}, className])}>
        <input {...others} type={type} checked={checked} onChange={this.handleChange}/>
        <i className="vx-checkbox-icon"></i>
        <span className="vx-checkbox-text">
          {children}
        </span>
      </label>
    );
  }
  handleChange (e) {
    if (this.props.$parent) {
      this.props.$parent.onChange && this.props.$parent.onChange(e)
    } else {
      this.props.onChange && this.props.onChange(e)
    }
  }
}

export default Checkbox;

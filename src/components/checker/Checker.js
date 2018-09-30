import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Checker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render () {
    let {children, style, className, $parent, ...others} = this.props
    let type = $parent && $parent.max === 1 ? 'radio' : 'checkbox'
    let checked = others.checked
    let disabled = others.disabled
    if ($parent) {
      if ($parent.value instanceof Array) {
        checked = $parent.value.indexOf(others.value) > -1
      } else {
        checked = $parent.value === others.value
      }
      if ($parent.value.length >= $parent.max && $parent.max > 1) {
        disabled = $parent.value.indexOf(others.value) === -1
      }
    }
    return (
      <label
        style={style}
        className={classnames(['vx-checker', {'is-disabled': disabled}, className])}>
        <input {...others} type={type} checked={checked} disabled={disabled} onChange={this.handleChange}/>
        <button type="button" disabled={disabled}>
          {children}
        </button>
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

export default Checker;

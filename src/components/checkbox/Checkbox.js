import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = props => {
  let {children, className, style, $parent, inline, iconStyle, onChange, ...others} = props
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
    if ($parent.inline !== undefined) {
      inline = $parent.inline
    }
    if ($parent.iconStyle !== undefined) {
      iconStyle = $parent.iconStyle
    }
  }
  let handleChange = (e) => {
    if ($parent) {
      $parent.onChange && $parent.onChange(e)
    } else {
      onChange && onChange(e)
    }
  }
  return (
    <label
      style={style}
      className={classnames(['vx-checkbox', {'is-disabled': disabled, 'is-inline': inline, 'vx-checkbox--reverse': $parent && $parent.direction === 'reverse', 'is-active': others.checked}, className])}>
      <input {...others} type={type} checked={checked} disabled={disabled} onChange={handleChange}/>
      <i className={classnames(["vx-checkbox--icon", iconStyle ? `is-${iconStyle}` : ''])}></i>
      <span className="vx-checkbox--text">
        {children}
      </span>
    </label>
  );
}
Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  inline: PropTypes.bool,
  iconStyle: PropTypes.string,
  onChange: PropTypes.func
}
Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  inline: false
}

export default Checkbox;

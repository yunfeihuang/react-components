import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Checker = props => {
  let {children, style, className, $parent, onChange, ...others} = props
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
      className={classnames(['vx-checker', {'is-disabled': disabled}, className])}>
      <input {...others} type={type} checked={checked} disabled={disabled} onChange={handleChange}/>
      <button type="button" disabled={disabled}>
        {children}
      </button>
    </label>
  );
}
Checker.propTypes = {
  onChange: PropTypes.func
}

export default Checker;

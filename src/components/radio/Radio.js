import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

const Radio = props => {
  let {children, className, style, $parent, onChange, ...others} = props
  let checked = others.checked
  if ($parent) {
    checked = $parent.value === others.value
  }
  let handleChange = e => {
    let value = e.target.value
    if ($parent) {
      $parent.onChange && $parent.onChange(value)
    } else {
      onChange && onChange(value)
    }
  }
  return (
    <label
      style={style}
      className={classnames(['vx-radio', {'is-disabled': others.disabled}, className])} >
      <input {...others} type="radio" checked={checked} onChange={handleChange}/>
      <i className="vx-radio--icon"></i>
      <span className="vx-radio--text">
        {children}
      </span>
    </label>
  );
}
Radio.propTypes = {
  onChange: PropTypes.func
}

export default Radio;

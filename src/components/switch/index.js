import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Switch = (props) => {
  const { className, style, onValue, offValue, value, onChange, size, ...others } = props
  let handleChange = (e) => {
    onChange && onChange(e.target.checked ? onValue : offValue)
  }
  return (
    <div className={classnames(['vx-switch--wrapper', `vx-switch--size-${size}`, className])} style={style}>
      <input
        {...others}
        value={value}
        checked={onValue === value}
        type="checkbox"
        onChange={handleChange}
      />
      <button type="button"></button>
    </div>
  )
}

Switch.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  offValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  size: PropTypes.string,
  onChange: PropTypes.func
}

Switch.defaultProps = {
  value: false,
  onValue: true,
  offValue: false,
  size: 'default'
}

export default Switch

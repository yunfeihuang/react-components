import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Switch = (props) => {
  const { className, style, onValue, offValue, value, onChange, ...others } = props
  let handleChange = (e) => {
    onChange && onChange(e.target.checked ? onValue : offValue)
  }
  return (
    <div className={classnames(['vx-switch--wrapper', className])} style={style}>
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
  onChange: PropTypes.func
}

Switch.defaultProps = {
  value: false,
  onValue: true,
  offValue: false
}

export default Switch

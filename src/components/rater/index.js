import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Rater = props => {
  let {className, disabled, value, max, color, gutter, star, onChange, ...others} = props
  let handleChange = _value => {
    _value !== value && onChange && onChange(_value)
  }
  let items = []
  for (let i = 1; i <= max; i++) {
    items.push(
      <span
        key={i}
        className={classnames(['vx-rater--item', {'is-active':i <= value}])}
        style={{color: i <= value && color ? color : '', marginLeft: gutter}}
        onClick={handleChange.bind(this, i)}>
        {star}
      </span>
    )
  }
  
  return (
    <div className={classnames(["vx-rater", className])} disabled={disabled} {...others}>
      {items}
    </div>
  )
}
Rater.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  star: PropTypes.string,
  color: PropTypes.string,
  gutter: PropTypes.string,
  onChange: PropTypes.func
}
Rater.defaultProps = {
  gutter: '',
  max: 5,
  star: '★',
  disabled: false,
}

export default Rater;

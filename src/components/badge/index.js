import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

let Badge = (props) => {
  let {className, text, max, ...others} = props
  return (
    <span className={classnames(['vx-badge', {'vx-badge--dot': text === ''}, className])} {...others}>
      {typeof text === 'number' && max && text > max ? <span className="badge-ellipsis"></span> : text}
    </span>
  )
}
Badge.propTypes = {
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.number
}
Badge.defaultProps = {
  text: '',
  max: 9
}

export default Badge;

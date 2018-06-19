import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const { className, opacity, style, ...others } = props
  return (
    <div 
      {...others}
      style={{
        ...style,
        opacity
      }}
      className={classnames(['vx-overlay', className])}>
    </div>
  )
}

Overlay.propTypes = {
  opacity: PropTypes.number
}

Overlay.defaultProps = {
  opacity: 0.2
}

export default Overlay

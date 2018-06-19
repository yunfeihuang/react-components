import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Arrow = (props) => {
  const { direction, size, color, component, style, className, ...others } = props
  const Component = component
  const styles = {
    height: size,
    width: size,
    borderColor: {
      up: `${color} transparent transparent ${color}`,
      right: `${color} ${color} transparent transparent`,
      down: `transparent ${color} ${color} transparent`,
      left: `transparent transparent ${color} ${color}`
    }[direction],
    ...style
  }
  return (
    <Component 
      {...others}
      style={styles}
      className={classnames(['vx-arrow', className])}>
    </Component>
  )
}

Arrow.propTypes = {
  direction: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  component: PropTypes.string
}

Arrow.defaultProps = {
  direction: 'right',
  size: '0.2rem',
  color: '#999',
  component: 'i'
}

export default Arrow
